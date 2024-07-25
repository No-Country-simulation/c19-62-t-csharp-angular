import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicLayoutComponent } from 'app/layouts/basic-layout/basic-layout.component';
import { BasicButtonComponent } from '../../shared/components/basic-button/basic-button.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, BasicLayoutComponent, BasicButtonComponent],
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
