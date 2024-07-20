import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './rating.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent {
  starsList = Array<string>(5).map((_, i) => `star ${i + 1}`);
}
