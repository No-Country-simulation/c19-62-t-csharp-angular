import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BasicButtonComponent } from 'app/shared/components/basic-button/basic-button.component';
import { RatingComponent } from '../../../courses/components/rating/rating.component';
import { CurrencyPipe, KeyValuePipe } from '@angular/common';

enum ActionPurchase {
  AddToCart = 'Agregar al carrito',
  BuyNow = 'Comprar ahora',
}

@Component({
  selector: 'app-purchase-card',
  standalone: true,
  imports: [BasicButtonComponent, RatingComponent, CurrencyPipe, KeyValuePipe],
  templateUrl: './purchase-card.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchaseCardComponent {
  readonly CURRENCY_SYMBOL = 'USD';
  buttonsCard = ActionPurchase;
  priceCourse = input.required<number>();
  ratingCourse = input.required<number>();
}
