import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';
import { SvgProps } from '../interfaces/SvgProps.interface';

@Component({
  selector: 'app-linked--in-svg',
  standalone: true,
  imports: [CommonModule],
  template: `<svg
    [class]="customClass()"
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 38 39"
    fill="none"
  >
    <path
      d="M10.2631 5.25C8.53049 5.25 7.125 6.65318 7.125 8.38574C7.125 10.1183 8.52937 11.554 10.2607 11.554C11.9921 11.554 13.3988 10.1183 13.3988 8.38574C13.3988 6.65437 11.9956 5.25 10.2631 5.25ZM25.573 13.5625C22.9379 13.5625 21.4303 14.9405 20.707 16.3109H20.6305V13.9313H15.4375V31.375H20.8485V22.7401C20.8485 20.4649 21.0202 18.2661 23.8358 18.2661C26.6109 18.2661 26.6515 20.8604 26.6515 22.8839V31.375H32.0555H32.0625V21.7938C32.0625 17.1055 31.0546 13.5625 25.573 13.5625ZM7.55639 13.9313V31.375H12.972V13.9313H7.55639Z"
      fill="#E6ECF2"
    />
  </svg>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkedInSvgComponent implements SvgProps {
  size: InputSignal<number> = input(46);
  customClass = input<string>('');
}
