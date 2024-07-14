import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CoursesCarouselComponent } from '../course-catalog/components/courses-carousel/courses-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CoursesCarouselComponent],
  templateUrl: './home.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
