import { Routes } from '@angular/router';

const WEB_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./views/home/home.component'),
  },
  {
    path: 'catalog',
    loadComponent: () => import('./views/catalog/catalog.component'),
    loadChildren: () => import('./views/catalog/catalog.routing'),
  },
  {
    path: 'auth',
    loadComponent: () => import('./views/auth/auth.component'),
    loadChildren: () => import('./views/auth/auth.routing'),
  },
];

export default WEB_ROUTES;
