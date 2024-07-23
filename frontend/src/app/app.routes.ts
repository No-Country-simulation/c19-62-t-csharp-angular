import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'learn-teach', pathMatch: 'full' },
  {
    path: 'learn-teach',
    loadComponent: () => import('./pages/web/web.component'),
    loadChildren: () => import('./pages/web/web.routing'),
    title: 'Learn-teach',
  },
  {
    path: 'cms',
    loadComponent: () => import('./pages/cms/cms.component'),
    title: 'Managment content',
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component'),
    title: 'Not found',
  },
];
