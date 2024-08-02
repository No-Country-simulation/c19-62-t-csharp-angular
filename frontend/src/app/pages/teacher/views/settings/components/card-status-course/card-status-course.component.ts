import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicButtonComponent } from 'app/shared/components/basic-button/basic-button.component';

@Component({
  selector: 'app-card-status-course',
  standalone: true,
  imports: [BasicButtonComponent],
  templateUrl: './card-status-course.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardStatusCourseComponent {}
