import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MainLogoComponent } from '../../shared/ui/main-logo/main-logo.component';
import { LoaderComponent } from '../../shared/ui/loader/loader.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [MainLogoComponent, LoaderComponent],
  templateUrl: './auth-layout.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent {
  description = input.required<string>();
}
