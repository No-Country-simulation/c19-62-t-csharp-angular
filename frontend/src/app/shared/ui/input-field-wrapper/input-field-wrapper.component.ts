import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-field-wrapper',
  standalone: true,
  imports: [],
  template: `
    <div class="grid gap-1">
      <ng-content />
      <div id="input-field" class="text-xs text-red-400">
        <ng-content select="[input-field]"></ng-content>
      </div>
    </div>
  `,
  styles: `
    input {
      font-size: 1rem;
      color: #333;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFieldWrapperComponent {}
