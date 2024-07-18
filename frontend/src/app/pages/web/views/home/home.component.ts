import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardInfoComponent } from './components/card-info/card-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardInfoComponent],
  templateUrl: './home.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
