import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';
import { SvgProps } from '../interfaces/SvgProps.interface';

@Component({
  selector: 'app-update-svg',
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
    <path
      d="M24.9173 5.75H13.4173C11.3002 5.75 9.58398 7.46624 9.58398 9.58333V19.1667M24.9173 5.75L36.4173 17.25M24.9173 5.75V15.3333C24.9173 16.3919 25.7754 17.25 26.834 17.25H36.4173M36.4173 17.25V36.4167C36.4173 38.5338 34.7011 40.25 32.584 40.25H19.1673C14.9331 40.25 11.5007 36.8174 11.5007 32.5833C11.5007 28.3492 14.9331 24.9167 19.1673 24.9167H24.9173M24.9173 24.9167L19.1673 19.1667M24.9173 24.9167L19.1673 30.6667"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateSvgComponent implements SvgProps {
  size: InputSignal<number> = input(46);
  customClass = input<string>('');
}
