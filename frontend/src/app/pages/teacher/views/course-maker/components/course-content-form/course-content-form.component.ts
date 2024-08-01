import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PencilSvgComponent } from '@icons/pencil-svg.component';
import { TrashSvgComponent } from '@icons/trash-svg.component';
import { BasicButtonComponent } from 'app/shared/components/basic-button/basic-button.component';

@Component({
  selector: 'app-course-content-form',
  standalone: true,
  imports: [TrashSvgComponent, PencilSvgComponent, BasicButtonComponent],
  templateUrl: './course-content-form.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseContentFormComponent {
  footerControls = ['descripción', 'recursos'];
}
