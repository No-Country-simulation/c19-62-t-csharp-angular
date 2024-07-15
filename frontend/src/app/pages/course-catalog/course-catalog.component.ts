import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CoursesCarouselComponent } from './components/courses-carousel/courses-carousel.component';
import { CourseFilterBarComponent } from './components/course-filter-bar/course-filter-bar.component';

@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [CoursesCarouselComponent, CourseFilterBarComponent],
  templateUrl: './course-catalog.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCatalogComponent {
  popularCourses = {
    title: 'Cursos más populares',
    description:
      'Descubra nuestros cursos más populares y prepárese para una carrera en demanda.',
    slides: [1, 2, 3, 4, 5],
  };
  newCourses = {
    title: 'Cursos nuevos',
    description:
      'Explora nuestros cursos nuevos y actualizados y mantente al día con las últimas tendencias.',
    slides: [1, 2, 3, 4, 5],
  };

  freeCourses = {
    title: 'Cursos gratis',
    description:
      'Explora nuestros cursos nuevos y actualizados y mantente al día con las últimas tendencias.',
    slides: [1, 2, 3, 4, 5],
  };
}
