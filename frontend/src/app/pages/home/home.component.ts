import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CourseCardComponent } from '../course-catalog/components/course-card/course-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './home.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
