import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MainLogoComponent } from '../../shared/components/main-logo/main-logo.component';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { WrapperImageComponent } from 'app/shared/components/wrapper-image/wrapper-image.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [MainLogoComponent, LoaderComponent, WrapperImageComponent],
  templateUrl: './auth-layout.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent {
  description = input<string>();
  imageComplementary = input<string>();
}
