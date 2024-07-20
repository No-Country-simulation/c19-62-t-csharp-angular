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
    path: 'auth',
    loadComponent: () => import('./views/auth/auth.component'),
    loadChildren: () => import('./views/auth/auth.routing'),
  },
  {
    path: 'user',
    loadComponent: () => import('./views/user/user.component'),
    loadChildren: () => import('./views/user/user.routing'),
  },
];

export default WEB_ROUTES;
