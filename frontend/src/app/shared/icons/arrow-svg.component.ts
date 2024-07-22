import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';
import { SvgProps } from '../interfaces/SvgProps.interface';

@Component({
  selector: 'app-arrow-svg',
  standalone: true,
  imports: [],
  template: `<svg
    [class]="customClass()"
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 13 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.1622 9.41172L2.30095 18.8235L0 16.6274L7.56026 9.41172L0 2.19604L2.30095 -4.3869e-05L12.1622 9.41172Z"
      fill="currentColor"
    />
  </svg> `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowSvgComponent implements SvgProps {
  size: InputSignal<number> = input(46);
  customClass = input<string>('');
}
