import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  BasicButtonConfig,
  DesignButton,
} from '../../interfaces/BasicButton.interface';
import { NgClass } from '@angular/common';
import { ArrowSvgComponent } from '@icons/arrow-svg.component';

@Component({
  selector: 'app-basic-button',
  standalone: true,
  imports: [NgClass, ArrowSvgComponent],
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicButtonComponent {
  btnConfig = input.required<BasicButtonConfig>();
  designBtn = input<DesignButton>('common');
  isDisabled = input<boolean>(false);
}
