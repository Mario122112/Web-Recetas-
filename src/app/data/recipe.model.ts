export type RecipeCategory =
  | 'Clásicas'
  | 'Con tomate'
  | 'Cremosas'
  | 'Vegetarianas'
  | 'Al horno'
  | 'Marineras';

export interface Recipe {
  slug: string;
  title: string;
  description: string;
  category: RecipeCategory;
  time: number;
  difficulty: 'Fácil' | 'Media' | 'Avanzada';
  servings: number;
  image: string;
  imageAlt: string;
  ingredients: string[];
  steps: string[];
  datePublished?: string;
  dateModified?: string;
  prepTime?: number;
  cookTime?: number;
  cuisine?: string;
  keywords?: string[];
}
