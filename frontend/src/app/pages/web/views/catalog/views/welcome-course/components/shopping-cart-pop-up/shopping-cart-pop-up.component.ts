import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShoppingCartSvgComponent } from '@icons/shopping-cart.component';
import { BasicButtonComponent } from 'app/shared/components/basic-button/basic-button.component';
import { WrapperImageComponent } from 'app/shared/components/wrapper-image/wrapper-image.component';
import { RatingComponent } from '../../../courses/components/rating/rating.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart-pop-up',
  standalone: true,
  imports: [
    WrapperImageComponent,
    ShoppingCartSvgComponent,
    BasicButtonComponent,
    RatingComponent,
    CurrencyPipe,
  ],
  templateUrl: './shopping-cart-pop-up.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartPopUpComponent {}
