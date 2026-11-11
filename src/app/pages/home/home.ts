import { Component, computed, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { RecipeCategory } from '../../data/recipe.model';
import { RECIPES, recipeImageSrcSet } from '../../data/recipes';
import { setCanonicalUrl } from '../../data/site-metadata';

const CATEGORIES: Array<'Todas' | RecipeCategory> = [
  'Todas', 'Clásicas', 'Con tomate', 'Cremosas', 'Vegetarianas', 'Al horno', 'Marineras',
];

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  protected readonly recipes = RECIPES;
  protected readonly recipeImageSrcSet = recipeImageSrcSet;
  protected readonly categories = CATEGORIES;
  protected readonly selectedCategory = signal<'Todas' | RecipeCategory>('Todas');
  protected readonly searchTerm = signal('');
  protected readonly visibleRecipes = computed(() => {
    const category = this.selectedCategory();
    const query = this.searchTerm().trim().toLocaleLowerCase('es');
    return RECIPES.filter((recipe) => {
      const matchesCategory = category === 'Todas' || recipe.category === category;
      const matchesQuery = !query || `${recipe.title} ${recipe.description} ${recipe.ingredients.join(' ')}`
        .toLocaleLowerCase('es')
        .includes(query);
      return matchesCategory && matchesQuery;
    });
  });

  constructor() {
    const canonicalUrl = setCanonicalUrl(this.document, '/');
    this.meta.removeTag('name="robots"');
    this.title.setTitle('Recetas de pasta fáciles y caseras | Macarrones con Tomatico');
    this.meta.updateTag({
      name: 'description',
      content: 'Descubre recetas de pasta con ingredientes, pasos claros, consejos y variaciones para cocinar en casa.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:title', content: 'Recetas de pasta fáciles y caseras' });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Recetas de pasta con ingredientes, pasos claros, consejos y variaciones para cocinar en casa.',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://images.pexels.com/photos/546945/pexels-photo-546945.jpeg?auto=compress&cs=tinysrgb&w=1200',
    });
    this.document.getElementById('website-jsonld')?.remove();
    const websiteSchema = this.document.createElement('script');
    websiteSchema.id = 'website-jsonld';
    websiteSchema.type = 'application/ld+json';
    websiteSchema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Macarrones con Tomatico',
      url: canonicalUrl,
    });
    this.document.head.appendChild(websiteSchema);
    this.meta.updateTag({ name: 'twitter:title', content: 'Recetas de pasta fáciles y caseras' });
    this.meta.updateTag({
      name: 'twitter:description',
      content: 'Recetas de pasta con ingredientes, pasos claros, consejos y variaciones para cocinar en casa.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://images.pexels.com/photos/546945/pexels-photo-546945.jpeg?auto=compress&cs=tinysrgb&w=1200',
    });
  }

  protected selectCategory(category: 'Todas' | RecipeCategory): void {
    this.selectedCategory.set(category);
  }

  protected setSearch(event: Event): void {
    this.searchTerm.set((event.target as HTMLInputElement).value);
  }
}
