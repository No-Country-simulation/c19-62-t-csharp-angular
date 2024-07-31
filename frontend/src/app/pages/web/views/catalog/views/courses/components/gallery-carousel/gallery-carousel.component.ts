import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { DetailsCourse } from '../../../../interfaces/CourseInfo.interface';
import { CoursesCarouselComponent } from 'app/shared/ui/courses-carousel/courses-carousel.component';

@Component({
  selector: 'app-gallery-carousel',
  standalone: true,
  imports: [CoursesCarouselComponent],
  templateUrl: './gallery-carousel.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryCarouselComponent {
  courseList = input.required<DetailsCourse[]>();
  popularCourses = [
    {
      title: 'Cursos más populares',
      description:
        'Descubra nuestros cursos más populares y prepárese para una carrera en demanda.',
      slides: [1, 2, 3, 4, 5],
    },
    {
      title: 'Cursos nuevos',
      description:
        'Explora nuestros cursos nuevos y actualizados y mantente al día con las últimas tendencias.',
      slides: [1, 2, 3, 4, 5],
    },
    {
      title: 'Cursos gratis',
      description:
        'Explora nuestros cursos nuevos y actualizados y mantente al día con las últimas tendencias.',
      slides: [1, 2, 3, 4, 5],
    },
  ];
}
