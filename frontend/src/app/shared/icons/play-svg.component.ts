import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';
import { SvgProps } from '../interfaces/SvgProps.interface';

@Component({
  selector: 'app-play-svg',
  standalone: true,
  imports: [],
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 120 120"
    fill="none"
  >
    <g clip-path="url(#clip0_509_3266)">
      <path
        d="M17.581 102.42C11.8504 96.8852 7.27942 90.2645 4.13488 82.9443C0.99034 75.624 -0.664834 67.7508 -0.734063 59.7841C-0.803292 51.8173 0.71481 43.9165 3.73166 36.5427C6.74852 29.169 11.2037 22.4699 16.8373 16.8363C22.4708 11.2027 29.1699 6.74754 36.5437 3.73069C43.9175 0.713834 51.8183 -0.804268 59.785 -0.735039C67.7518 -0.66581 75.625 0.989363 82.9452 4.1339C90.2655 7.27844 96.8862 11.8494 102.421 17.58C113.35 28.8961 119.398 44.0523 119.261 59.7841C119.125 75.5159 112.815 90.5646 101.69 101.689C90.5656 112.814 75.5168 119.124 59.785 119.26C44.0532 119.397 28.8971 113.349 17.581 102.42ZM93.961 93.96C102.968 84.9532 108.028 72.7375 108.028 60C108.028 47.2625 102.968 35.0467 93.961 26.04C84.9542 17.0332 72.7384 11.9733 60.001 11.9733C47.2635 11.9733 35.0477 17.0332 26.041 26.04C17.0342 35.0467 11.9743 47.2625 11.9743 60C11.9743 72.7375 17.0342 84.9532 26.041 93.96C35.0477 102.967 47.2635 108.027 60.001 108.027C72.7384 108.027 84.9542 102.967 93.961 93.96ZM42.001 36L90.001 60L42.001 84V36Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_509_3266">
        <rect width="120" height="120" fill="white" />
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
export class PlaySvgComponent implements SvgProps {
  size: InputSignal<number> = input(46);
}
