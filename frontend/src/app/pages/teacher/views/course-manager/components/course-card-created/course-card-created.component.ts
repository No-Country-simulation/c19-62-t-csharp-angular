import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicButtonComponent } from '../../../../../../shared/components/basic-button/basic-button.component';
import { WrapperImageComponent } from '../../../../../../shared/components/wrapper-image/wrapper-image.component';

@Component({
  selector: 'app-course-card-created',
  standalone: true,
  imports: [BasicButtonComponent, WrapperImageComponent],
  templateUrl: './course-card-created.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardCreatedComponent {}
