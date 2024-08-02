import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CameraSvgComponent } from '../../../../../../shared/icons/camera-svg.component';
import { BasicButtonComponent } from '../../../../../../shared/components/basic-button/basic-button.component';

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [CameraSvgComponent, BasicButtonComponent],
  templateUrl: './image-uploader.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageUploaderComponent {}
