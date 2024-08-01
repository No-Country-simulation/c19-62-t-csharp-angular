import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InstructorLayoutComponent } from 'app/layouts/instructor-layout/instructor-layout.component';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [InstructorLayoutComponent, RouterOutlet],
  template: `
    <app-instructor-layout>
      <router-outlet />
    </app-instructor-layout>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TeacherComponent {}
