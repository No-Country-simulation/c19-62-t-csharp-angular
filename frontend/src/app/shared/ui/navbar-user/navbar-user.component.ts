import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DropdownUserComponent } from '../dropdown-user/dropdown-user.component';
import { ShoppingCartSvgComponent } from '../../icons/shopping-cart.component';
import { BellSvgComponent } from '../../icons/bell-svg.component';
import { HeartSvgComponent } from '../../icons/heart-svg.component';

@Component({
  selector: 'app-navbar-user',
  standalone: true,
  imports: [
    DropdownUserComponent,
    ShoppingCartSvgComponent,
    BellSvgComponent,
    HeartSvgComponent,
  ],
  templateUrl: './navbar-user.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarUserComponent {
  readonly sizeIcon = 35;
}
