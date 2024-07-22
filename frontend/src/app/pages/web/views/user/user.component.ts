import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserProfileLayoutComponent } from '../../../../layouts/user-profile-layout/user-profile-layout.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserProfileLayoutComponent, RouterOutlet],
  template: `
    <app-user-profile-layout>
      <router-outlet />
    </app-user-profile-layout>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent {}
