import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  template: `
    <div class="loader">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
      <div class="loader-message">
        <p>{{ loaderMessage() ?? 'Cargando...' }}</p>
        @if (emoji()) {
          <span>{{ emoji() }}</span>
        }
      </div>
    </div>
  `,
  styleUrl: './loader.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  loaderMessage = input<string>();
  emoji = input<string>();
}
