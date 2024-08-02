import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/web/web.component'),
    loadChildren: () => import('./pages/web/web.routing'),
    title: 'Learn-teach',
  },
  {
    path: 'teacher',
    loadComponent: () => import('./pages/teacher/teacher.component'),
    loadChildren: () => import('./pages/teacher/teacher.routing'),
    title: 'Management',
  },

  {
    path: 'cms',
    loadComponent: () => import('./pages/cms/cms.component'),
    title: 'Management content',
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component'),
    title: 'Not found',
  },
];
