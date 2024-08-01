import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BasicButtonComponent } from '../../../../../../../../shared/components/basic-button/basic-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration-message',
  standalone: true,
  imports: [BasicButtonComponent, RouterLink],
  templateUrl: './registration-message.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationMessageComponent {
  message = input.required<string>();
  btnText = input.required<string>();
}
