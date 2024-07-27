import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [],
  templateUrl: './form-login.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLoginComponent {}
