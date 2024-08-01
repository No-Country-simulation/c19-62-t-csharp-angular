import { PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WrapperImageComponent } from '../../../../../../../../shared/components/wrapper-image/wrapper-image.component';
import { PlaySvgComponent } from '../../../../../../../../shared/icons/play-svg.component';

@Component({
  selector: 'app-course-progress-card',
  standalone: true,
  imports: [PercentPipe, WrapperImageComponent, PlaySvgComponent],
  templateUrl: './course-progress-card.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseProgressCardComponent {}
