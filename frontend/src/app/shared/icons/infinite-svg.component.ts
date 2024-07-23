import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';
import { SvgProps } from '../interfaces/SvgProps.interface';

@Component({
  selector: 'app-infinite-svg',
  standalone: true,
  imports: [],
  template: `<svg
    [class]="customClass()"
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 46 46"
    fill="none"
  >
    <path
      d="M19.1667 18.0497C17.5599 16.4359 15.7295 15.3334 13.4167 15.3334C9.18248 15.3334 5.75 18.7659 5.75 23C5.75 27.2341 9.18248 30.6667 13.4167 30.6667C22.0417 30.6667 23.9583 15.3334 32.5833 15.3334C36.8174 15.3334 40.25 18.7659 40.25 23C40.25 27.2341 36.8174 30.6667 32.5833 30.6667C30.2705 30.6667 28.4401 29.5642 26.8333 27.9504"
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
export class InfiniteSvgComponent implements SvgProps {
  size: InputSignal<number> = input(46);
  customClass = input<string>('');
}
