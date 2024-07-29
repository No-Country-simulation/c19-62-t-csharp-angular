import { NgClass, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';
import { CustomClass } from 'app/shared/interfaces/CustomClass.interface';
export interface ImageProps extends CustomClass {
  alt: InputSignal<string>;
  imageUrl: InputSignal<string>;
}

@Component({
  selector: 'app-wrapper-image',
  standalone: true,
  imports: [NgOptimizedImage, NgClass],
  templateUrl: './wrapper-image.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperImageComponent implements ImageProps {
  alt = input.required<string>();
  imageUrl = input.required<string>();
  customClass = input.required<string>();
  width = input<number>();
  height = input<number>();
  isFill = input<boolean>();
}
