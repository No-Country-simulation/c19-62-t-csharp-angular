import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArrowSvgComponent } from '@icons/arrow-svg.component';
import { SettingsSvgComponent } from '@icons/settings-svg.component';
import { LoaderComponent } from 'app/shared/components/loader/loader.component';
import { MainLogoComponent } from 'app/shared/components/main-logo/main-logo.component';

@Component({
  selector: 'app-instructor-layout',
  standalone: true,
  imports: [
    MainLogoComponent,
    ArrowSvgComponent,
    SettingsSvgComponent,
    RouterLink,
    LoaderComponent,
  ],
  templateUrl: './instructor-layout.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstructorLayoutComponent {}
