import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-grid-section',
  standalone: true,
  imports: [NgClass],
  templateUrl: './grid-section.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridSectionComponent {
  isReversed = input(false);
}
