import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./views/login/login.component'),
  },
  {
    path: 'register',
    loadComponent: () => import('./views/register/register.component'),
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

export default AUTH_ROUTES;
