import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'learn-teach', pathMatch: 'full' },
  {
    path: 'learn-teach',
    loadComponent: () => import('./pages/web/web.component'),
    loadChildren: () => import('./pages/web/web.routing'),
  },
  {
    path: 'cms',
    loadComponent: () => import('./pages/cms/cms.component'),
    canActivate: [],
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component'),
  },
];
