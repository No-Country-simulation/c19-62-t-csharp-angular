import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [],
  template: `<div
    class="relative before:absolute before:h-1 before:w-full before:border-t-[#98D5DB] lg:before:border-t-[.4rem] before:border-t-[.2rem] before:border-b-[.15rem] lg:before:border-b-[.2rem]  before:border-b-primary-blue before:bottom-0 before:translate-y-1"
  ></div>`,
  styleUrl: './divider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerComponent {}
