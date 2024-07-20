import { Routes } from '@angular/router';

const CATALOG_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
  {
    path: 'courses',
    loadComponent: () => import('./views/courses/courses.component'),
  },
  {
    path: 'courses/:id',
    loadComponent: () =>
      import('./views/course-detail/course-detail.component'),
  },
  {
    path: '**',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
];

export default CATALOG_ROUTES;
