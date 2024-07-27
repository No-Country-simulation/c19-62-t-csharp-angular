import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';
import { SvgProps } from '../interfaces/SvgProps.interface';

@Component({
  selector: 'app-hamburger-bar-svg',
  standalone: true,
  imports: [],
  template: `<svg
    [class]="customClass()"
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 29 26"
    fill="none"
  >
    <path
      d="M26.25 21C26.8278 21.0003 27.3834 21.2229 27.8016 21.6216C28.2198 22.0204 28.4685 22.5647 28.4963 23.1419C28.5241 23.719 28.3287 24.2847 27.9507 24.7218C27.5728 25.1589 27.0411 25.4337 26.466 25.4895L26.25 25.5H2.25C1.67217 25.4997 1.11661 25.2771 0.69842 24.8784C0.280232 24.4796 0.031482 23.9353 0.00371361 23.3581C-0.0240547 22.781 0.171288 22.2153 0.549263 21.7782C0.927239 21.3411 1.45887 21.0663 2.034 21.0105L2.25 21H26.25ZM26.25 10.5C26.8467 10.5 27.419 10.7371 27.841 11.159C28.2629 11.581 28.5 12.1533 28.5 12.75C28.5 13.3467 28.2629 13.919 27.841 14.341C27.419 14.7629 26.8467 15 26.25 15H2.25C1.65326 15 1.08097 14.7629 0.65901 14.341C0.237053 13.919 0 13.3467 0 12.75C0 12.1533 0.237053 11.581 0.65901 11.159C1.08097 10.7371 1.65326 10.5 2.25 10.5H26.25ZM26.25 0C26.8467 0 27.419 0.237053 27.841 0.65901C28.2629 1.08097 28.5 1.65326 28.5 2.25C28.5 2.84674 28.2629 3.41903 27.841 3.84099C27.419 4.26295 26.8467 4.5 26.25 4.5H2.25C1.65326 4.5 1.08097 4.26295 0.65901 3.84099C0.237053 3.41903 0 2.84674 0 2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0H26.25Z"
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
export class HamburgerBarSvgComponent implements SvgProps {
  size: InputSignal<number> = input(46);
  customClass = input<string>('');
}
