import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PermissionsManagerBarComponent } from './components/permissions-manager-bar/permissions-manager-bar.component';
import { AccessCardComponent } from './components/access-card/access-card.component';
import { CardStatusCourseComponent } from './components/card-status-course/card-status-course.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    PermissionsManagerBarComponent,
    AccessCardComponent,
    CardStatusCourseComponent,
  ],
  templateUrl: './settings.component.html',
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SettingsComponent {}
