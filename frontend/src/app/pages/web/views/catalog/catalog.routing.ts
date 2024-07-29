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
    title: 'Learn-teach | course catalog',
  },
  {
    path: 'courses/:id',
    loadComponent: () =>
      import('./views/course-detail/course-detail.component'),
    title: 'Learn-teach | details course',
  },
  {
    path: '**',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
];

export default CATALOG_ROUTES;
