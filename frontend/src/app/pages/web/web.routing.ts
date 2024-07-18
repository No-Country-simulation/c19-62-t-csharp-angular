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
    loadComponent: () => import('../auth/auth.component'),
    loadChildren: () => import('../auth/auth.routing'),
  },
];

export default WEB_ROUTES;
