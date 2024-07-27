import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
} from '@angular/core';
import { StarSvgComponent } from '@icons/star-svg.component';
import { SvgProps } from 'app/shared/interfaces/SvgProps.interface';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [StarSvgComponent],
  templateUrl: './rating.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent implements SvgProps {
  starsList = Array<string>(5).map((_, i) => `star ${i + 1}`);
  size = input.required<number>();
  rating = model(0);
  hasInteractive = input<boolean>(false);
  customClass = input<string>('');

  public onClick(newRating: number): void {
    if (!this.hasInteractive() || typeof newRating !== 'number') return;

    this.rating.set(newRating);
  }
}
