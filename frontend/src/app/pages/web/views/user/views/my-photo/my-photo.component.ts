import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-my-photo',
  standalone: true,
  imports: [],
  templateUrl: './my-photo.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MyPhotoComponent {}
