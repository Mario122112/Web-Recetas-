import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((page) => page.HomePage),
    title: 'Recetas de pasta fáciles y caseras | Macarrones con Tomatico',
  },
  {
    path: 'receta/:slug',
    loadComponent: () => import('./pages/recipe-detail/recipe-detail').then((page) => page.RecipeDetailPage),
  },
  {
    path: 'sobre-nosotros',
    loadComponent: () => import('./pages/info/info').then((page) => page.InfoPage),
    data: { page: 'about', canonicalPath: '/sobre-nosotros' },
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/info/info').then((page) => page.InfoPage),
    data: { page: 'contact', canonicalPath: '/contacto' },
  },
  {
    path: 'privacidad',
    loadComponent: () => import('./pages/info/info').then((page) => page.InfoPage),
    data: { page: 'privacy', canonicalPath: '/privacidad' },
  },
  {
    path: 'cookies',
    loadComponent: () => import('./pages/info/info').then((page) => page.InfoPage),
    data: { page: 'cookies', canonicalPath: '/cookies' },
  },
  {
    path: 'aviso-legal',
    loadComponent: () => import('./pages/info/info').then((page) => page.InfoPage),
    data: { page: 'legal', canonicalPath: '/aviso-legal' },
  },
  {
    path: '404',
    loadComponent: () => import('./pages/not-found/not-found').then((page) => page.NotFoundPage),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((page) => page.NotFoundPage),
  },
];
