import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InstructorLayoutComponent } from 'app/layouts/instructor-layout/instructor-layout.component';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [InstructorLayoutComponent],
  templateUrl: './teacher.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TeacherComponent {}
