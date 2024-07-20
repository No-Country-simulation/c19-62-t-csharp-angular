import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ImageDimensions } from './heart-svg.component';

@Component({
  selector: 'app-bell-svg',
  standalone: true,
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="sizes().width"
    [attr.height]="sizes().height"
    viewBox="0 0 48 48"
    fill="none"
  >
    <mask
      id="mask0_520_645"
      style="mask-type:alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="48"
      height="48"
    >
      <rect width="48" height="48" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_520_645)">
      <path
        d="M8 38V35H12V19.8C12 17 12.825 14.4917 14.475 12.275C16.125 10.0583 18.3 8.66667 21 8.1V7C21 6.16667 21.2917 5.45833 21.875 4.875C22.4583 4.29167 23.1667 4 24 4C24.8333 4 25.5417 4.29167 26.125 4.875C26.7083 5.45833 27 6.16667 27 7V8.1C29.7 8.66667 31.875 10.0583 33.525 12.275C35.175 14.4917 36 17 36 19.8V35H40V38H8ZM24 44C22.9 44 21.9583 43.6083 21.175 42.825C20.3917 42.0417 20 41.1 20 40H28C28 41.1 27.6083 42.0417 26.825 42.825C26.0417 43.6083 25.1 44 24 44ZM15 35H33V19.8C33 17.3 32.125 15.175 30.375 13.425C28.625 11.675 26.5 10.8 24 10.8C21.5 10.8 19.375 11.675 17.625 13.425C15.875 15.175 15 17.3 15 19.8V35Z"
        fill="#043466"
      />
    </g>
  </svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BellSvgComponent {
  sizes = input<ImageDimensions>({
    width: 48,
    height: 48,
  });
}
