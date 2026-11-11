import { DOCUMENT } from '@angular/common';
import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Subscription } from 'rxjs';
import { Recipe } from '../../data/recipe.model';
import { scaleIngredient } from '../../data/ingredient-quantities';
import { RECIPE_EDITORIAL } from '../../data/recipe-editorial';
import { RECIPE_GUIDES } from '../../data/recipe-guides';
import { RECIPES, recipeImageSrcSet } from '../../data/recipes';
import { SITE_ORIGIN, setCanonicalUrl } from '../../data/site-metadata';

@Component({
  selector: 'app-recipe-detail-page',
  imports: [RouterLink],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly viewportScroller = inject(ViewportScroller);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private routeSubscription?: Subscription;
  protected readonly recipe = signal<Recipe | null>(null);
  protected readonly recipeImageSrcSet = recipeImageSrcSet;
  protected readonly checkedIngredients = signal(new Set<number>());
  protected readonly completedSteps = signal(new Set<number>());
  protected readonly targetServings = signal(0);
  protected readonly servingTargets = [2, 4, 6];
  protected readonly copyFeedback = signal('');
  protected readonly ingredients = computed(() => {
    const current = this.recipe();
    if (!current) {
      return [];
    }

    const multiplier = this.targetServings() / current.servings;
    return current.ingredients.map((ingredient) => scaleIngredient(ingredient, multiplier));
  });
  protected readonly shoppingIngredients = computed(() => {
    const selected = this.checkedIngredients();
    return this.ingredients().filter((_, index) => selected.has(index));
  });
  protected readonly stepProgress = computed(() => ({
    completed: this.completedSteps().size,
    total: this.recipe()?.steps.length ?? 0,
  }));
  protected readonly guide = computed(() => {
    const current = this.recipe();
    return current ? RECIPE_GUIDES[current.slug] : null;
  });
  protected readonly editorial = computed(() => {
    const current = this.recipe();
    return current ? RECIPE_EDITORIAL[current.slug] : null;
  });
  protected readonly relatedRecipes = computed(() => {
    const current = this.recipe();
    return current
      ? RECIPES.filter((item) => item.category === current.category && item.slug !== current.slug).slice(0, 3)
      : [];
  });

  constructor() {
    this.viewportScroller.setOffset([0, 96]);
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe((params) => {
      const recipe = RECIPES.find((item) => item.slug === params.get('slug')) ?? null;
      this.recipe.set(recipe);
      this.checkedIngredients.set(new Set());
      this.completedSteps.set(new Set());
      this.targetServings.set(recipe?.servings ?? 0);
      this.copyFeedback.set('');
      if (recipe) {
        this.updatePageMetadata(recipe);
      } else {
        this.title.setTitle('Página no encontrada | Macarrones con Tomatico');
        this.meta.updateTag({ name: 'description', content: 'No encontramos esta receta. Explora todas nuestras ideas de pasta.' });
        this.meta.updateTag({ name: 'robots', content: 'noindex' });
        this.removeRecipeSchema();
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.removeRecipeSchema();
  }

  protected toggleIngredient(index: number): void {
    const updated = new Set(this.checkedIngredients());
    if (updated.has(index)) {
      updated.delete(index);
    } else {
      updated.add(index);
    }
    this.checkedIngredients.set(updated);
  }

  protected setTargetServings(servings: number): void {
    this.targetServings.set(servings);
  }

  protected toggleStep(index: number): void {
    const updated = new Set(this.completedSteps());
    if (updated.has(index)) {
      updated.delete(index);
    } else {
      updated.add(index);
    }
    this.completedSteps.set(updated);
  }

  protected selectAllIngredients(): void {
    this.checkedIngredients.set(new Set(this.ingredients().map((_, index) => index)));
  }

  protected clearShoppingList(): void {
    this.checkedIngredients.set(new Set());
  }

  protected async copyShoppingList(): Promise<void> {
    if (!this.shoppingIngredients().length) {
      this.copyFeedback.set('Selecciona al menos un ingrediente para copiar la lista.');
      return;
    }

    try {
      await navigator.clipboard.writeText(this.shoppingIngredients().map((ingredient) => `- ${ingredient}`).join('\n'));
      this.copyFeedback.set('Lista de la compra copiada.');
    } catch {
      this.copyFeedback.set('No se pudo copiar. Comprueba los permisos del navegador e inténtalo de nuevo.');
    }
  }

  protected async navigateToSection(event: MouseEvent, anchor: string): Promise<void> {
    event.preventDefault();
    await this.router.navigate([], { relativeTo: this.route, fragment: anchor });
    this.viewportScroller.scrollToAnchor(anchor, { behavior: 'instant' });
  }

  protected printRecipe(): void {
    window.print();
  }

  protected photoSource(imageUrl: string): string {
    const photoId = new URL(imageUrl).pathname.match(/\/photos\/(\d+)\//)?.[1];
    if (!photoId) {
      throw new Error(`La imagen no tiene un identificador de Pexels válido: ${imageUrl}`);
    }
    return `https://www.pexels.com/photo/${photoId}/`;
  }

  private updatePageMetadata(recipe: Recipe): void {
    this.meta.removeTag('name="robots"');
    this.title.setTitle(`${recipe.title}: receta fácil paso a paso | Macarrones con Tomatico`);
    this.meta.updateTag({ name: 'description', content: recipe.description });
    const canonicalUrl = setCanonicalUrl(this.document, `/receta/${recipe.slug}`);
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:title', content: recipe.title });
    this.meta.updateTag({ property: 'og:description', content: recipe.description });
    this.meta.updateTag({ property: 'og:image', content: recipe.image });
    this.meta.updateTag({ property: 'og:image:alt', content: recipe.imageAlt });
    this.meta.updateTag({ name: 'twitter:title', content: recipe.title });
    this.meta.updateTag({ name: 'twitter:description', content: recipe.description });
    this.meta.updateTag({ name: 'twitter:image', content: recipe.image });

    this.removeRecipeSchema();
    const script = this.document.createElement('script');
    script.id = 'recipe-jsonld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Recipe',
          name: recipe.title,
          description: recipe.description,
          image: [{
            '@type': 'ImageObject',
            contentUrl: recipe.image,
            creditText: 'Pexels',
            license: 'https://www.pexels.com/license/',
            acquireLicensePage: this.photoSource(recipe.image),
          }],
          recipeCategory: recipe.category,
          recipeCuisine: recipe.cuisine ?? 'Italiana',
          datePublished: recipe.datePublished,
          dateModified: recipe.dateModified,
          inLanguage: 'es',
          keywords: recipe.keywords?.length
            ? recipe.keywords.join(', ')
            : `${recipe.title}, receta de pasta, ${recipe.category.toLocaleLowerCase('es')}`,
          recipeYield: `${recipe.servings} raciones`,
          totalTime: `PT${recipe.time}M`,
          ...(recipe.prepTime !== undefined && { prepTime: `PT${recipe.prepTime}M` }),
          ...(recipe.cookTime !== undefined && { cookTime: `PT${recipe.cookTime}M` }),
          recipeIngredient: recipe.ingredients,
          recipeInstructions: recipe.steps.map((text, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            text,
          })),
          author: {
            '@type': 'Person',
            name: 'Mario Galindo',
            url: `${SITE_ORIGIN}/sobre-nosotros`,
          },
          mainEntityOfPage: canonicalUrl,
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Recetas', item: `${SITE_ORIGIN}/#recetas` },
            { '@type': 'ListItem', position: 3, name: recipe.title, item: canonicalUrl },
          ],
        },
      ],
    });
    this.document.head.appendChild(script);
  }

  private removeRecipeSchema(): void {
    this.document.getElementById('recipe-jsonld')?.remove();
  }
}
