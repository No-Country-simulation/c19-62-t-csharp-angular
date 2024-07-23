import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';
import { SvgProps } from '../interfaces/SvgProps.interface';

@Component({
  selector: 'app-medal-svg',
  standalone: true,
  imports: [CommonModule],
  template: `<svg
    [class]="customClass()"
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 47 46"
    fill="none"
  >
    <path
      d="M23.875 31.75C31.814 31.75 38.25 25.314 38.25 17.375C38.25 9.4359 31.814 3 23.875 3C15.9359 3 9.5 9.4359 9.5 17.375C9.5 25.314 15.9359 31.75 23.875 31.75Z"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.875 26C28.6385 26 32.5 22.1385 32.5 17.375C32.5 12.6115 28.6385 8.75 23.875 8.75C19.1115 8.75 15.25 12.6115 15.25 17.375C15.25 22.1385 19.1115 26 23.875 26Z"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.5 28.875V43.251L23.8737 38.9385L15.25 43.251V28.8763"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MedalSvgComponent implements SvgProps {
  size: InputSignal<number> = input(46);
  customClass = input<string>('');
}
