import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicButtonComponent } from '../basic-button/basic-button.component';
import { Router, RouterLink } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { MainLogoComponent } from '../main-logo/main-logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    BasicButtonComponent,
    SearchBarComponent,
    MainLogoComponent,
  ],
  templateUrl: './header.component.html',
  styles: `
    :host {
      display: block;
      box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.3);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private readonly router: Router) {}

  public navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
