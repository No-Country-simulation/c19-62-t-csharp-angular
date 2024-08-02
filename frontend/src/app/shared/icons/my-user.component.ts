import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';
import { SvgProps } from '../interfaces/SvgProps.interface';

@Component({
  selector: 'app-my-user',
  standalone: true,
  imports: [],
  template: `<svg
    [class]="customClass()"
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 24 24"
    fill="none"
  >
    <mask
      id="mask0_1240_2805"
      style="mask-type:alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1240_2805)">
      <path
        d="M4.5 18.575C5.5 17.6417 6.6325 16.8875 7.8975 16.3125C9.16233 15.7375 10.529 15.45 11.9975 15.45C13.4658 15.45 14.8333 15.7375 16.1 16.3125C17.3667 16.8875 18.5 17.6417 19.5 18.575V4.5H4.5V18.575ZM12.05 13.475C13.0167 13.475 13.8333 13.1417 14.5 12.475C15.1667 11.8083 15.5 10.9917 15.5 10.025C15.5 9.05833 15.1667 8.24167 14.5 7.575C13.8333 6.90833 13.0167 6.575 12.05 6.575C11.0833 6.575 10.2667 6.90833 9.6 7.575C8.93333 8.24167 8.6 9.05833 8.6 10.025C8.6 10.9917 8.93333 11.8083 9.6 12.475C10.2667 13.1417 11.0833 13.475 12.05 13.475ZM4.5 21C4.1 21 3.75 20.85 3.45 20.55C3.15 20.25 3 19.9 3 19.5V4.5C3 4.1 3.15 3.75 3.45 3.45C3.75 3.15 4.1 3 4.5 3H19.5C19.9 3 20.25 3.15 20.55 3.45C20.85 3.75 21 4.1 21 4.5V19.5C21 19.9 20.85 20.25 20.55 20.55C20.25 20.85 19.9 21 19.5 21H4.5ZM5.575 19.5H18.4C17.3667 18.6167 16.3208 17.9708 15.2625 17.5625C14.2042 17.1542 13.1167 16.95 12 16.95C10.8833 16.95 9.79583 17.1542 8.7375 17.5625C7.67917 17.9708 6.625 18.6167 5.575 19.5ZM12.05 11.975C11.5083 11.975 11.0479 11.7854 10.6688 11.4062C10.2896 11.0271 10.1 10.5667 10.1 10.025C10.1 9.48333 10.2896 9.02292 10.6688 8.64375C11.0479 8.26458 11.5083 8.075 12.05 8.075C12.5917 8.075 13.0521 8.26458 13.4313 8.64375C13.8104 9.02292 14 9.48333 14 10.025C14 10.5667 13.8104 11.0271 13.4313 11.4062C13.0521 11.7854 12.5917 11.975 12.05 11.975Z"
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
export class MyUserComponent implements SvgProps {
  size: InputSignal<number> = input(46);
  customClass = input<string>('');
}
