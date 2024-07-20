import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CoursesCarouselComponent } from '../courses-carousel/courses-carousel.component';

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
