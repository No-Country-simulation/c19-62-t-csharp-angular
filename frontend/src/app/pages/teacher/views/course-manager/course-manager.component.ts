import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-course-manager',
  standalone: true,
  imports: [],
  templateUrl: './course-manager.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CourseManagerComponent {}
