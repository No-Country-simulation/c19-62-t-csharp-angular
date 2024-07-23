import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';
import { SvgProps } from '../interfaces/SvgProps.interface';

@Component({
  selector: 'app-shopping-cart-svg',
  standalone: true,
  template: `<svg
    [class]="customClass()"
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 48 48"
    fill="none"
  >
    <mask
      id="mask0_520_648"
      style="mask-type:alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="48"
      height="48"
    >
      <rect width="48" height="48" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_520_648)">
      <path
        d="M14.3393 43.95C13.3463 43.95 12.4998 43.5965 11.7998 42.8895C11.0998 42.1825 10.7498 41.3325 10.7498 40.3395C10.7498 39.3465 11.1033 38.5 11.8103 37.8C12.5173 37.1 13.3673 36.75 14.3603 36.75C15.3533 36.75 16.1998 37.1035 16.8998 37.8105C17.5998 38.5175 17.9498 39.3675 17.9498 40.3605C17.9498 41.3535 17.5963 42.2 16.8893 42.9C16.1823 43.6 15.3323 43.95 14.3393 43.95ZM34.3393 43.95C33.3463 43.95 32.4998 43.5965 31.7998 42.8895C31.0998 42.1825 30.7498 41.3325 30.7498 40.3395C30.7498 39.3465 31.1033 38.5 31.8103 37.8C32.5173 37.1 33.3673 36.75 34.3603 36.75C35.3533 36.75 36.1998 37.1035 36.8998 37.8105C37.5998 38.5175 37.9498 39.3675 37.9498 40.3605C37.9498 41.3535 37.5963 42.2 36.8893 42.9C36.1823 43.6 35.3323 43.95 34.3393 43.95ZM11.7498 10.95L17.2498 22.35H31.6498L37.8998 10.95H11.7498ZM10.2498 7.95H39.7033C40.469 7.95 41.0515 8.3 41.4508 9C41.8501 9.7 41.8498 10.4 41.4498 11.1L34.6998 23.25C34.3331 23.8833 33.8571 24.3917 33.2718 24.775C32.6865 25.1583 32.0458 25.35 31.3498 25.35H16.1998L13.3998 30.55H37.9498V33.55H13.8498C12.4498 33.55 11.4415 33.0833 10.8248 32.15C10.2081 31.2167 10.2165 30.1667 10.8498 29L14.0498 23.1L6.44981 7H2.5498V4H8.39981L10.2498 7.95Z"
        fill="#043466"
      />
    </g>
  </svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartSvgComponent implements SvgProps {
  size: InputSignal<number> = input(46);
  customClass = input<string>('');
}
