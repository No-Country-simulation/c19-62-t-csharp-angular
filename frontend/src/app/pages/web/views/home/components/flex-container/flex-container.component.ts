import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-flex-container',
  standalone: true,
  imports: [NgClass],
  templateUrl: './flex-container.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexContainerComponent {
  isColReverse = input(false);
}
