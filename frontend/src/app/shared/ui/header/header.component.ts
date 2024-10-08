import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicButtonComponent } from '../../components/basic-button/basic-button.component';
import { Router, RouterLink } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { MainLogoComponent } from '../../components/main-logo/main-logo.component';
import { Store } from '@ngrx/store';
import { AUTH_SELECTORS } from '../../../core/store/auth/auth.selectors';
import { AppState } from '../../../core/store/app.state';
import { AsyncPipe } from '@angular/common';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';
import { DropdownUserMobileComponent } from '../dropdown-user-mobile/dropdown-user-mobile.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    BasicButtonComponent,
    SearchBarComponent,
    MainLogoComponent,
    NavbarUserComponent,
    DropdownUserMobileComponent,
    AsyncPipe,
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
  isLogged = this.store.select(AUTH_SELECTORS.selectIsLoggedIn);

  constructor(
    private readonly router: Router,
    private readonly store: Store<AppState>
  ) {}

  public navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
