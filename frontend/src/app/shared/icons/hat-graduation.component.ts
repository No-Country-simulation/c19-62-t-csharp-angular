import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';
import { SvgProps } from '../interfaces/SvgProps.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-hat-graduation',
  standalone: true,
  imports: [NgClass],
  template: `<svg
    [ngClass]="customClass()"
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 64 64"
    aria-hidden="true"
    role="img"
    class="iconify iconify--emojione"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      d="M13.1 30.2V37c0 14 37.7 14 37.7 0v-6.8H13.1z"
      fill="#596066"
    ></path>

    <path fill="#3e4347" d="M62 25.4L32 38.9L2 25.4l30-13.5z"></path>

    <g fill="#ffce31">
      <path
        d="M31.9 24.8c-4.6 2.1-14.6 6.6-15 6.8c-.2.1-.4.3-.4.6V39c0 .8 1 .8 1 0v-6.3c4.5-2 14.2-6.4 14.6-6.6c.6-.3.4-1.5-.2-1.3"
      ></path>

      <ellipse cx="17" cy="38.9" rx="1.9" ry="2.4"></ellipse>

      <path
        d="M17 51.9c1 0 1.9-.5 1.9-1.2V38.9h-3.8v11.8c0 .7.9 1.2 1.9 1.2"
      ></path>
    </g>

    <g fill="#594640">
      <path d="M18.3 39.2c-.1 0-.1.1-.2.1v12.4c.1 0 .1-.1.2-.1V39.2"></path>

      <path d="M17.5 39.5h-.2v12.4h.2V39.5"></path>

      <path d="M16.7 39.5h-.2v12.4h.2V39.5"></path>

      <path d="M15.9 39.3c-.1 0-.1-.1-.2-.1v12.5c.1 0 .1.1.2.1V39.3"></path>
    </g>
  </svg>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HatGraduationComponent implements SvgProps {
  size: InputSignal<number> = input(46);
  customClass = input<string>('');
}
