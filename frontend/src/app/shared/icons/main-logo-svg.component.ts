import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-logo-svg',
  standalone: true,
  imports: [],
  template: `<svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 2000 445.45"
    style="enable-background:new 0 0 2000 445.45;"
    xml:space="preserve"
  >
    <style type="text/css">
      .st0 {
        fill: #1c3761;
      }
      .st1 {
        font-family: 'PathwayGothicOne-Regular';
      }
      .st2 {
        font-size: 454.9647px;
      }
      .st3 {
        fill: #9cd5dd;
      }
    </style>
    <text transform="matrix(1 0 0 1 235.3378 378.0399)" class="st0 st1 st2">
      earn &amp; Teach
    </text>
    <g>
      <g>
        <polygon
          class="st0"
          points="16.58,42.15 59.38,42.15 59.38,346.13 235.34,346.13 235.34,380.34 16.58,380.34 "
        />
        <rect x="16.58" y="346.13" class="st3" width="218.76" height="34.21" />
        <rect x="16.58" y="363.24" class="st0" width="218.76" height="17.1" />
      </g>
    </g>
  </svg>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLogoSvgComponent {}
