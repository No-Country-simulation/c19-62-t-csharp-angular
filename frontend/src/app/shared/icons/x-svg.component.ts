import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';
import { SvgProps } from '../interfaces/SvgProps.interface';

@Component({
  selector: 'app-x-svg',
  standalone: true,
  imports: [],
  template: `<svg
    [class]="customClass()"
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 32 33"
    fill="none"
  >
    <g clip-path="url(#clip0_664_3371)">
      <mask
        id="mask0_664_3371"
        style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="33"
      >
        <path d="M0 0.5H32V32.5H0V0.5Z" fill="white" />
      </mask>
      <g mask="url(#mask0_664_3371)">
        <path
          d="M25.2 1.99951H30.1074L19.3874 14.2829L32 31.0007H22.1257L14.3863 20.8635L5.54057 31.0007H0.628571L12.0937 17.8578L0 2.0018H10.1257L17.1109 11.2658L25.2 1.99951ZM23.4743 28.0567H26.1943L8.64 4.79037H5.72343L23.4743 28.0567Z"
          fill="#E6ECF2"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_664_3371">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XSvgComponent implements SvgProps {
  size: InputSignal<number> = input(46);
  customClass = input<string>('');
}
