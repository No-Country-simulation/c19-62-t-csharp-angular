import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';
import { SvgProps } from '../interfaces/SvgProps.interface';

@Component({
  selector: 'app-add-resource-svg',
  standalone: true,
  imports: [CommonModule],
  template: `<svg
    [class]="customClass()"
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 46 46"
    fill="none"
  >
    <path
      d="M9.58333 36.4167V9.58333H23V23H36.4167V24.9167C37.7583 24.9167 39.0425 25.1658 40.25 25.5875V17.25L28.75 5.75H9.58333C7.45583 5.75 5.75 7.45583 5.75 9.58333V36.4167C5.75 37.4333 6.15387 38.4084 6.87276 39.1272C7.59165 39.8461 8.56667 40.25 9.58333 40.25H25.5875C25.1658 39.0425 24.9167 37.7583 24.9167 36.4167H9.58333ZM26.8333 8.625L37.375 19.1667H26.8333V8.625ZM44.0833 34.5V38.3333H38.3333V44.0833H34.5V38.3333H28.75V34.5H34.5V28.75H38.3333V34.5H44.0833Z"
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
export class AddResourceSvgComponent implements SvgProps {
  size: InputSignal<number> = input(46);
  customClass = input<string>('');
}
