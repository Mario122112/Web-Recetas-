export interface ParsedIngredientQuantity {
  amount: number;
  unit: string | null;
  ingredient: string;
  scalable: boolean;
}

const AMOUNT_PATTERN = /\d+(?:[.,]\d+)?(?:\/\d+)?/g;
const MEASUREMENT_PATTERN = /^\s*(kg|g|ml|l|cucharadas?|cucharaditas?|unidades?)\b/i;
const COUNTABLE_PATTERN = /\b(huevos?|yemas?|dientes?|cebollas?|limón|limones|calabacines?|berenjenas?|pimientos?|zanahorias?|ramas?|manojos?|tomates?|latas?|láminas?|brócolis?)\b/i;
const SEASONING_PATTERN = /\b(sal|pimienta|guindilla|orégano|nuez moscada|albahaca|perejil|tomillo|salvia)\b/i;
const COUNTABLE_FORMS: Record<string, [string, string]> = {
  huevo: ['huevo', 'huevos'],
  yema: ['yema', 'yemas'],
  diente: ['diente', 'dientes'],
  cebolla: ['cebolla', 'cebollas'],
  limón: ['limón', 'limones'],
  calabacín: ['calabacín', 'calabacines'],
  berenjena: ['berenjena', 'berenjenas'],
  pimiento: ['pimiento', 'pimientos'],
  zanahoria: ['zanahoria', 'zanahorias'],
  rama: ['rama', 'ramas'],
  manojo: ['manojo', 'manojos'],
  tomate: ['tomate', 'tomates'],
  lata: ['lata', 'latas'],
  lámina: ['lámina', 'láminas'],
  brócoli: ['brócoli', 'brócolis'],
};

function parseAmount(value: string): number {
  if (value.includes('/')) {
    const [numerator, denominator] = value.split('/').map(Number);
    return numerator / denominator;
  }

  return Number(value.replace(',', '.'));
}

function formatAmount(value: number, countable: boolean, unit: string | null): string {
  let rounded: number;
  if (countable) {
    rounded = Math.max(0.5, Math.round(value * 2) / 2);
  } else if (unit === 'g') {
    rounded = value < 1
      ? Math.max(0.5, Math.round(value * 2) / 2)
      : value < 10
        ? Math.round(value)
        : Math.round(value / 5) * 5;
  } else if (unit === 'ml') {
    rounded = value < 10
      ? Math.round(value)
      : Math.round(value / 5) * 5;
  } else {
    rounded = Math.round(value * 100) / 100;
  }

  if (Number.isInteger(rounded)) {
    return String(rounded);
  }

  if (unit === 'g' && rounded === 0.5) {
    return 'medio';
  }

  return rounded.toLocaleString('es-ES', { maximumFractionDigits: 2 });
}

function adjustCountableNoun(description: string, amount: number): string {
  if (!COUNTABLE_PATTERN.test(description)) {
    return description;
  }

  return description.replace(
    /\b(huevos?|yemas?|dientes?|cebollas?|limón|limones|calabacines?|berenjenas?|pimientos?|zanahorias?|ramas?|manojos?|tomates?|latas?|láminas?|brócolis?)\b/gi,
    (noun) => {
      const forms = Object.values(COUNTABLE_FORMS).find(([singular, plural]) =>
        singular.toLocaleLowerCase('es-ES') === noun.toLocaleLowerCase('es-ES')
        || plural.toLocaleLowerCase('es-ES') === noun.toLocaleLowerCase('es-ES'));
      return forms ? forms[amount > 1 ? 1 : 0] : noun;
    },
  );
}

export function parseIngredientQuantities(ingredient: string): ParsedIngredientQuantity[] {
  const matches = [...ingredient.matchAll(AMOUNT_PATTERN)];

  return matches.map((match, index) => {
    const amountText = match[0];
    const amountIndex = match.index ?? 0;
    const nextAmountIndex = matches[index + 1]?.index ?? ingredient.length;
    const tail = ingredient.slice(amountIndex + amountText.length, nextAmountIndex);
    const unitMatch = tail.match(MEASUREMENT_PATTERN);
    const unit = unitMatch?.[1] ?? null;
    const ingredientName = tail
      .replace(MEASUREMENT_PATTERN, '')
      .replace(/^\s*de\s+/i, '')
      .replace(/\s+y\s*$/i, '')
      .trim();
    const rangeTail = /^\s*[-–]\s*$/.test(tail)
      ? ingredient.slice(nextAmountIndex + (matches[index + 1]?.[0].length ?? 0), matches[index + 2]?.index ?? ingredient.length)
      : tail;
    const description = `${unit ?? ''} ${ingredientName} ${rangeTail}`;

    return {
      amount: parseAmount(amountText),
      unit,
      ingredient: ingredientName,
      scalable: !SEASONING_PATTERN.test(description),
    };
  });
}

export function scaleIngredient(ingredient: string, multiplier: number): string {
  if (multiplier === 1 || !Number.isFinite(multiplier) || multiplier <= 0) {
    return ingredient;
  }

  const matches = [...ingredient.matchAll(AMOUNT_PATTERN)];
  if (!matches.length) {
    return ingredient;
  }

  let result = '';
  let previousIndex = 0;

  matches.forEach((match, index) => {
    const amountText = match[0];
    const amountIndex = match.index ?? 0;
    const nextAmountIndex = matches[index + 1]?.index ?? ingredient.length;
    const tail = ingredient.slice(amountIndex + amountText.length, nextAmountIndex);
    const rangeTail = /^\s*[-–]\s*$/.test(tail)
      ? ingredient.slice(nextAmountIndex + (matches[index + 1]?.[0].length ?? 0), matches[index + 2]?.index ?? ingredient.length)
      : '';
    const description = `${tail} ${rangeTail}`;
    const scaledAmount = parseAmount(amountText) * multiplier;
    const isSeasoning = SEASONING_PATTERN.test(description);
    const isCountable = COUNTABLE_PATTERN.test(description);
    const countableAmount = Math.max(0.5, Math.round(scaledAmount * 2) / 2);
    const roundedAmount = isSeasoning
      ? parseAmount(amountText)
      : formatAmount(scaledAmount, isCountable, tail.match(MEASUREMENT_PATTERN)?.[1]?.toLocaleLowerCase('es-ES') ?? null);
    const isHalfGram = !isSeasoning
      && tail.match(MEASUREMENT_PATTERN)?.[1]?.toLocaleLowerCase('es-ES') === 'g'
      && roundedAmount === 'medio';

    result += ingredient.slice(previousIndex, amountIndex);
    result += isSeasoning ? amountText : roundedAmount;
    result += isHalfGram
      ? tail.replace(MEASUREMENT_PATTERN, (unit) => unit.replace(/g$/i, 'gramo'))
      : adjustCountableNoun(tail, isCountable ? countableAmount : scaledAmount);
    previousIndex = nextAmountIndex;
  });

  return result + ingredient.slice(previousIndex);
}
