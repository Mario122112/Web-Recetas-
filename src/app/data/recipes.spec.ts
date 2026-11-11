import { RECIPE_EDITORIAL } from './recipe-editorial';
import { RECIPE_GUIDES } from './recipe-guides';
import { RECIPES, recipeImageSrcSet } from './recipes';

describe('recipe collection', () => {
  it('contains all 36 complete recipes with unique slugs, titles, descriptions, and photos', () => {
    expect(RECIPES).toHaveLength(36);
    expect(new Set(RECIPES.map(({ slug }) => slug)).size).toBe(RECIPES.length);
    expect(new Set(RECIPES.map(({ title }) => title)).size).toBe(RECIPES.length);
    expect(new Set(RECIPES.map(({ description }) => description)).size).toBe(RECIPES.length);
    expect(new Set(RECIPES.map(({ image }) => image)).size).toBe(RECIPES.length);
    expect(RECIPES.every((recipe) =>
      recipe.title.trim().length > 0
      && recipe.description.trim().length > 0
      && recipe.imageAlt.trim().length > 0
      && recipe.time > 0
      && recipe.servings > 0
      && recipe.ingredients.length >= 4
      && recipe.steps.length >= 5
      && recipe.steps.every((step) => step.split(/\s+/).length >= 12)
      && recipe.image.startsWith('https://images.pexels.com/photos/'),
    )).toBe(true);
  });

  it('sets initial publication dates and culinary origin for all recipes', () => {
    expect(RECIPES.every(({ datePublished, dateModified, cuisine }) =>
      datePublished === '2026-11-10'
      && dateModified === '2026-11-10'
      && Boolean(cuisine),
    )).toBe(true);
    expect(RECIPES.find(({ slug }) => slug === 'macarrones-con-chorizo')?.cuisine).toBe('Española');
    expect(RECIPES.filter(({ slug }) => slug !== 'macarrones-con-chorizo')
      .every(({ cuisine }) => cuisine === 'Italiana')).toBe(true);
  });

  it('provides original, recipe-specific editorial guidance for every recipe', () => {
    expect(Object.keys(RECIPE_EDITORIAL).sort()).toEqual(RECIPES.map(({ slug }) => slug).sort());
    expect(new Set(Object.values(RECIPE_EDITORIAL).map(({ introduction }) => introduction)).size).toBe(RECIPES.length);
    expect(RECIPES.every(({ slug }) => {
      const editorial = RECIPE_EDITORIAL[slug];
      return editorial
        && editorial.introduction.split(/\s+/).length >= 35
        && editorial.technique.split(/\s+/).length >= 25
        && editorial.variations.split(/\s+/).length >= 25;
    })).toBe(true);
  });

  it('provides complete, recipe-specific practical guidance for all 36 recipes', () => {
    expect(Object.keys(RECIPE_GUIDES).sort()).toEqual(RECIPES.map(({ slug }) => slug).sort());
    expect(RECIPES.every(({ slug }) => {
      const guide = RECIPE_GUIDES[slug];
      return guide
        && guide.ingredientNotes.trim().length > 0
        && guide.prep.trim().length > 0
        && guide.tips.length >= 5
        && guide.troubleshooting.length >= 4
        && guide.storage.trim().length > 0
        && guide.faqs.length >= 5
        && guide.faqs.every(({ question, answer }) => question.trim() && answer.trim());
    })).toBe(true);

    const answers = RECIPES.flatMap(({ slug }) => RECIPE_GUIDES[slug].faqs.map(({ answer }) => answer));
    expect(new Set(answers).size).toBe(answers.length);
    const questions = RECIPES.flatMap(({ slug }) => RECIPE_GUIDES[slug].faqs.map(({ question }) => question));
    expect(new Set(questions).size).toBe(questions.length);
    const tips = RECIPES.flatMap(({ slug }) => RECIPE_GUIDES[slug].tips);
    expect(new Set(tips).size).toBe(tips.length);
  });

  it('provides responsive image candidates at the expected widths', () => {
    const srcSet = recipeImageSrcSet(RECIPES[0].image);

    expect(srcSet.split(', ').map((candidate) => candidate.split(' ').at(-1))).toEqual([
      '240w',
      '360w',
      '480w',
      '800w',
      '1200w',
    ]);
    expect(srcSet).toContain('w=240');
    expect(srcSet).toContain('w=360');
    expect(srcSet).toContain('w=480');
    expect(srcSet).toContain('w=800');
    expect(srcSet).toContain('w=1200');
  });
});
