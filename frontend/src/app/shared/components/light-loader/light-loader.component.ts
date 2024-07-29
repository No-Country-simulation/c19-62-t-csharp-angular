import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-light-loader',
  standalone: true,
  imports: [],
  template: `
    <div class="loader">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span>Loading</span>
    </div>
  `,
  styleUrl: './light-loader.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightLoaderComponent {}
