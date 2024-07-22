import { Routes } from '@angular/router';

const USER_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    loadComponent: () => import('./views/profile/profile.component'),
  },
  {
    path: 'my-photo',
    loadComponent: () => import('./views/my-photo/my-photo.component'),
  },
  {
    path: 'settings',
    loadComponent: () => import('./views/settings/settings.component'),
  },
  {
    path: 'payments',
    loadComponent: () => import('./views/payments/payments.component'),
  },
  {
    path: 'courses',
    loadComponent: () => import('./views/courses/courses.component'),
  },
];

export default USER_ROUTES;
