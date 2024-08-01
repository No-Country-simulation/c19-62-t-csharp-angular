import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SettingsComponent {}
