import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';
import { SvgProps } from '../interfaces/SvgProps.interface';

@Component({
  selector: 'app-lock-svg',
  standalone: true,
  imports: [CommonModule],
  template: `<svg
    [class]="customClass()"
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 24 24"
    fill="none"
  >
    <mask
      id="mask0_1243_1874"
      style="mask-type:alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1243_1874)">
      <path
        d="M5.5 22C5.0875 22 4.73442 21.8531 4.44075 21.5592C4.14692 21.2656 4 20.9125 4 20.5V9.65C4 9.2375 4.14692 8.88433 4.44075 8.5905C4.73442 8.29683 5.0875 8.15 5.5 8.15H7.25V5.75C7.25 4.43583 7.71342 3.31567 8.64025 2.3895C9.56692 1.46317 10.6877 1 12.0027 1C13.3176 1 14.4375 1.46317 15.3625 2.3895C16.2875 3.31567 16.75 4.43583 16.75 5.75V8.15H18.5C18.9125 8.15 19.2657 8.29683 19.5595 8.5905C19.8532 8.88433 20 9.2375 20 9.65V20.5C20 20.9125 19.8532 21.2656 19.5595 21.5592C19.2657 21.8531 18.9125 22 18.5 22H5.5ZM5.5 20.5H18.5V9.65H5.5V20.5ZM12.0043 17C12.5348 17 12.9875 16.8164 13.3625 16.4492C13.7375 16.0821 13.925 15.6407 13.925 15.125C13.925 14.625 13.7361 14.1708 13.3583 13.7625C12.9804 13.3542 12.5262 13.15 11.9957 13.15C11.4653 13.15 11.0125 13.3542 10.6375 13.7625C10.2625 14.1708 10.075 14.6292 10.075 15.1375C10.075 15.6458 10.2639 16.0833 10.6418 16.45C11.0196 16.8167 11.4738 17 12.0043 17ZM8.75 8.15H15.25V5.75C15.25 4.84717 14.9343 4.07983 14.303 3.448C13.6717 2.816 12.905 2.5 12.003 2.5C11.101 2.5 10.3333 2.816 9.7 3.448C9.06667 4.07983 8.75 4.84717 8.75 5.75V8.15Z"
        fill="currentColor"
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
export class LockSvgComponent implements SvgProps {
  size: InputSignal<number> = input(46);
  customClass = input<string>('');
}
