import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicLayoutComponent } from 'app/layouts/basic-layout/basic-layout.component';
import { BasicButtonComponent } from '../../shared/components/basic-button/basic-button.component';
import { Router, RouterLink } from '@angular/router';
import { WrapperImageComponent } from 'app/shared/components/wrapper-image/wrapper-image.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    RouterLink,
    BasicLayoutComponent,
    BasicButtonComponent,
    WrapperImageComponent,
  ],
  templateUrl: './not-found.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFoundComponent {
  constructor(private readonly router: Router) {}

  public navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
