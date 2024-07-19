import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../shared/ui/header/header.component';

@Component({
  selector: 'app-basic-layout',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <main
      class="grid grid-rows-[auto_1fr] grid-cols-[2rem_1fr_2rem] min-h-dvh bg-[#F6F6F7]"
    >
      <app-header class="col-[1/4] row-[1/2] px-8 z-10" />
      <div class="col-[2/3] content-center pt-10">
        <ng-content>
          <p class="text-center text-xl font-medium">Cargando ...</p>
        </ng-content>
      </div>
    </main>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicLayoutComponent {}
