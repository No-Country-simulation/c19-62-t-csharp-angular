import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PlanningFormComponent } from './components/planning-form/planning-form.component';

@Component({
  selector: 'app-course-maker',
  standalone: true,
  imports: [PlanningFormComponent],
  templateUrl: './course-maker.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CourseMakerComponent {}
