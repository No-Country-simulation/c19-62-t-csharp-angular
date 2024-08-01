import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../shared/ui/header/header.component';
import { FooterComponent } from 'app/shared/ui/footer/footer.component';

@Component({
  selector: 'app-basic-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  template: `
    <main
      class="grid grid-rows-[auto_1fr] overflow-x-hidden grid-cols-[1rem_1fr_1rem] min-h-dvh bg-[#F6F6F7] xl:grid-cols-[4rem_1fr_4rem]"
    >
      <app-header class="col-[1/4] row-[1/2] px-8 z-20" />
      <div class="col-[2/3] py-10 min-h-dvh">
        <ng-content>
          <p class="text-center text-xl font-medium">Cargando ...</p>
        </ng-content>
      </div>
      <app-footer class="col-[1/4] row-[3/4]" />
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
