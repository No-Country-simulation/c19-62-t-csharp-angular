import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-main-logo',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './main-logo.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLogoComponent {
  sizes = input({
    width: 200,
    height: 50,
  });
}
