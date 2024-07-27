import { NgClass, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CustomClass } from 'app/shared/interfaces/CustomClass.interface';

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
export class MainLogoComponent implements CustomClass {
  customClass = input.required<string>();
}
