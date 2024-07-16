import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicLayoutComponent } from '../../layouts/basic-layout/basic-layout.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-web',
  standalone: true,
  imports: [BasicLayoutComponent, RouterOutlet],
  template: `
    <app-basic-layout>
      <router-outlet />
    </app-basic-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WebComponent {}
