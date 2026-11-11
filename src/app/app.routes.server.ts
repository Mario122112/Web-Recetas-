import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';
import { RECIPES } from './data/recipes';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'sobre-nosotros', renderMode: RenderMode.Prerender },
  { path: 'contacto', renderMode: RenderMode.Prerender },
  { path: 'privacidad', renderMode: RenderMode.Prerender },
  { path: 'cookies', renderMode: RenderMode.Prerender },
  { path: 'aviso-legal', renderMode: RenderMode.Prerender },
  {
    path: 'receta/:slug',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.None,
    getPrerenderParams: async () => RECIPES.map(({ slug }) => ({ slug })),
  },
  {
    path: '404',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
