import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';
import { SvgProps } from '../interfaces/SvgProps.interface';

@Component({
  selector: 'app-heart-svg',
  standalone: true,
  imports: [],
  template: `<svg
    [class]="customClass()"
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 64 64"
    fill="none"
  >
    <path
      d="M32.2673 48.9333L32.0006 49.2L31.7073 48.9333C19.0407 37.44 10.6673 29.84 10.6673 22.1333C10.6673 16.8 14.6673 12.8 20.0007 12.8C24.1073 12.8 28.1073 15.4667 29.5206 19.0933H34.4806C35.894 15.4667 39.894 12.8 44.0006 12.8C49.334 12.8 53.334 16.8 53.334 22.1333C53.334 29.84 44.9607 37.44 32.2673 48.9333ZM44.0006 7.46667C39.3606 7.46667 34.9073 9.62667 32.0006 13.0133C29.094 9.62667 24.6406 7.46667 20.0007 7.46667C11.7873 7.46667 5.33398 13.8933 5.33398 22.1333C5.33398 32.1867 14.4007 40.4267 28.134 52.88L32.0006 56.4L35.8673 52.88C49.6006 40.4267 58.6673 32.1867 58.6673 22.1333C58.6673 13.8933 52.214 7.46667 44.0006 7.46667Z"
      fill="currentColor"
    />
  </svg>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeartSvgComponent implements SvgProps {
  size: InputSignal<number> = input(46);
  customClass = input<string>('');
}
