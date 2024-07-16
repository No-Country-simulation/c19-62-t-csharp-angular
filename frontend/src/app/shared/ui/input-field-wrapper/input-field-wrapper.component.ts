import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-field-wrapper',
  standalone: true,
  imports: [],
  template: `
    <div class="grid gap-1">
      <ng-content />
      <div class="text-xs h-14">
        <ng-content select="[input-field]"></ng-content>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFieldWrapperComponent {}
