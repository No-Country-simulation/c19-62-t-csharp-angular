import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-arrow-svg',
  standalone: true,
  template: `<svg
    width="13"
    height="19"
    viewBox="0 0 13 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.1622 9.41172L2.30095 18.8235L0 16.6274L7.56026 9.41172L0 2.19604L2.30095 -4.3869e-05L12.1622 9.41172Z"
      fill="currentColor"
    />
  </svg> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowSvgComponent {}
