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
    title: 'Learn-teach | home',
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
  {
    path: 'user',
    loadComponent: () => import('./views/user/user.component'),
    loadChildren: () => import('./views/user/user.routing'),
  },
  {
    path: 'user/my-courses',
    loadComponent: () =>
      import('./views/user/views/my-courses/my-courses.component'),
  },
];

export default WEB_ROUTES;
