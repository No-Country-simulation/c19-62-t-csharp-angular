import {
  ChangeDetectionStrategy,
  Component,
  computed,
  model,
} from '@angular/core';
import { EyeFillSvgComponent } from '@icons/eye-fill-svg.component';
import { EyeOffSvgComponent } from '@icons/eye-off-svg.component';

@Component({
  selector: 'app-show-toggle-btn',
  standalone: true,
  imports: [EyeFillSvgComponent, EyeOffSvgComponent],
  templateUrl: './show-toggle-btn.component.html',
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowToggleBtnComponent {
  isView = model(false);
  sizeIcon = 25;
  titleStream = computed(() => (this.isView() ? 'hidden' : 'show'));

  public onCLick(): void {
    this.isView.update((prev) => !prev);
  }
}
