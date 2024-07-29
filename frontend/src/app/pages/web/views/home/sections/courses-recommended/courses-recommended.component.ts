import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TitleComponent } from 'app/shared/components/title/title.component';
import { DividerComponent } from 'app/shared/components/divider/divider.component';
import { DetailsCourse } from '../../../catalog/interfaces/CourseInfo.interface';
import { GridDataType } from '../../interfaces/Recommendation.interface';
import { CourseGridComponent } from '../../components/course-grid/course-grid.component';

@Component({
  selector: 'app-courses-recommended',
  standalone: true,
  imports: [TitleComponent, DividerComponent, CourseGridComponent],
  templateUrl: './courses-recommended.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesRecommendedComponent {
  popularCourses = input.required<DetailsCourse[]>();
  freeCourses = input.required<DetailsCourse[]>();
  trendingCourses = input.required<DetailsCourse[]>();

  popularGridCourse: GridDataType = {
    title: 'Conoce nuestros cursos',
    emphasis: 'más populares',
    description:
      '¡Explora nuestros cursos más demandados! Adquirirás conocimientos que te serán de gran utilidad.',
    link: {
      text: 'Cursos más populares',
      url: '/learn-teach/catalog/courses',
    },
  };

  trendingGridCourse: GridDataType = {
    title: 'Explora y profundiza en las',
    emphasis: 'últimas tendencias',
    link: {
      text: 'Cursos nuevos',
      url: '/learn-teach/catalog/courses',
    },
  };

  freeGridCourse: GridDataType = {
    title:
      '...O toma lecciones junto a nuestros profesionales con los siguientes',
    emphasis: 'cursos sin costo',
    link: {
      text: 'Cursos gratis',
      url: '/learn-teach/catalog/courses',
    },
  };
}
