import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-course-content-form',
  standalone: true,
  imports: [],
  templateUrl: './course-content-form.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseContentFormComponent {}
