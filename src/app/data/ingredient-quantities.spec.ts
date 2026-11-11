import { parseIngredientQuantities, scaleIngredient } from './ingredient-quantities';
import { RECIPES } from './recipes';

describe('ingredient quantity scaling', () => {
  it('scales compound quantities and preserves the ingredient wording', () => {
    expect(scaleIngredient('2 huevos y 1 yema', 2)).toBe('4 huevos y 2 yemas');
    expect(scaleIngredient('100 g de queso rallado', 0.5)).toBe('50 g de queso rallado');
    expect(scaleIngredient('1/2 cebolla', 2)).toBe('1 cebolla');
  });

  it('keeps seasoning quantities unchanged and scales quantities around ranges', () => {
    expect(scaleIngredient('1 cucharadita de sal', 2)).toBe('1 cucharadita de sal');
    expect(scaleIngredient('1-2 cucharaditas de pimienta', 2)).toBe('1-2 cucharaditas de pimienta');
    expect(scaleIngredient('1 cebolla y 2 dientes de ajo', 2)).toBe('2 cebollas y 4 dientes de ajo');
  });

  it('leaves unmeasured ingredients and unsupported text intact', () => {
    expect(scaleIngredient('Aceite de oliva, al gusto', 3)).toBe('Aceite de oliva, al gusto');
    expect(scaleIngredient('una pizca de nuez moscada', 2)).toBe('una pizca de nuez moscada');
  });

  it('recognizes amounts and units without modifying the source recipes', () => {
    const originalIngredients = RECIPES.map(({ ingredients }) => [...ingredients]);
    const parsed = parseIngredientQuantities('150 ml de caldo y 2 dientes de ajo');

    expect(parsed).toEqual([
      { amount: 150, unit: 'ml', ingredient: 'caldo', scalable: true },
      { amount: 2, unit: null, ingredient: 'dientes de ajo', scalable: true },
    ]);

    RECIPES.forEach((recipe, recipeIndex) => {
      recipe.ingredients.forEach((ingredient) => scaleIngredient(ingredient, 1.5));
      expect(recipe.ingredients).toEqual(originalIngredients[recipeIndex]);
    });
  });
});
