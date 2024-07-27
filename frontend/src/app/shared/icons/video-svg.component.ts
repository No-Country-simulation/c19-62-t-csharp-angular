import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';
import { SvgProps } from '../interfaces/SvgProps.interface';

@Component({
  selector: 'app-video-svg',
  standalone: true,
  imports: [],
  template: `<svg
    [class]="customClass()"
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 47 46"
    fill="none"
  >
    <path
      d="M4.8125 10.7812H27.8125C29.3374 10.7812 30.8 11.3871 31.8783 12.4654C32.9566 13.5437 33.5625 15.0063 33.5625 16.5312V33.7812C33.5625 34.1625 33.4111 34.5282 33.1414 34.7977C32.8719 35.0673 32.5062 35.2187 32.125 35.2187H9.125C7.6 35.2187 6.13747 34.6129 5.05914 33.5346C3.9808 32.4563 3.375 30.9936 3.375 29.4687V12.2187C3.375 11.8375 3.52646 11.4719 3.79603 11.2023C4.06561 10.9327 4.43126 10.7812 4.8125 10.7812Z"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M33.5625 20.125L43.625 14.375V31.625L33.5625 25.875"
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
export class VideoSvgComponent implements SvgProps {
  size: InputSignal<number> = input(46);
  customClass = input<string>('');
}
