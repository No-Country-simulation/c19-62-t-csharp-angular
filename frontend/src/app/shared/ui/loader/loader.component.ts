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
      <p class="loader-message">{{ loaderMessage() ?? 'Cargando...' }}</p>
    </div>
  `,
  styleUrl: './loader.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  loaderMessage = input<string>();
}
