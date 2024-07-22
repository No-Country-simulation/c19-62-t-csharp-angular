import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';
import { SvgProps } from '../interfaces/SvgProps.interface';

@Component({
  selector: 'app-trophy-svg',
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
    <mask
      id="mask0_536_3339"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="46"
      height="46"
    >
      <path d="M46 0H0V46H46V0Z" fill="white" />
    </mask>
    <g mask="url(#mask0_536_3339)">
      <path
        d="M23 28.75C29.3513 28.75 34.5 23.4499 34.5 16.9118V3.83337H11.5V16.9118C11.5 23.4499 16.6487 28.75 23 28.75Z"
        stroke="currentColor"
        stroke-width="4"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.5007 20.1251V10.5417H3.83398C3.83398 16.9306 7.66732 20.1251 11.5007 20.1251Z"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M34.5 20.1251V10.5417H42.1667C42.1667 16.9306 38.3333 20.1251 34.5 20.1251Z"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23 30.6667V34.5001"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.375 40.25L17.9113 34.5H27.8325L31.625 40.25H14.375Z"
        stroke="currentColor"
        stroke-width="4"
        stroke-linejoin="round"
      />
    </g>
  </svg>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrophySvgComponent implements SvgProps {
  size: InputSignal<number> = input(46);
  customClass = input<string>('');
}
