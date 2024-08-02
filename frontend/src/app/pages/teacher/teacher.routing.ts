import { Routes } from '@angular/router';

const TEACHER_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'course-manager',
    pathMatch: 'full',
  },
  {
    path: 'course-manager',
    loadComponent: () =>
      import('./views/course-manager/course-manager.component'),
    title: 'Learn-teach | course manager',
  },
  {
    path: 'settings',
    loadComponent: () => import('./views/settings/settings.component'),
    title: 'Learn-teach | my settings',
  },
  {
    path: 'course-maker',
    loadComponent: () => import('./views/course-maker/course-maker.component'),
    title: 'Learn-teach | course maker',
  },
];

export default TEACHER_ROUTES;
