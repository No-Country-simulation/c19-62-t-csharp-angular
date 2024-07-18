import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicLayoutComponent } from './layouts/basic-layout/basic-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicLayoutComponent],
  template: '<router-outlet /> ',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
