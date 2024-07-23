import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicLayoutComponent } from 'app/layouts/basic-layout/basic-layout.component';
import { BasicButtonComponent } from '../../shared/components/basic-button/basic-button.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [BasicLayoutComponent, BasicButtonComponent],
  templateUrl: './not-found.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFoundComponent {}
