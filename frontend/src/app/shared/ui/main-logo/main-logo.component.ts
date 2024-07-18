import { NgClass, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-main-logo',
  standalone: true,
  imports: [NgOptimizedImage, NgClass],
  templateUrl: './main-logo.component.html',
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLogoComponent {
  customClass = input.required<string>();
}
