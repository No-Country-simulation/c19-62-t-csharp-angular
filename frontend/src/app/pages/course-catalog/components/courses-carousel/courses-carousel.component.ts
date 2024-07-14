import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-courses-carousel',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './courses-carousel.component.html',
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesCarouselComponent {
  slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
