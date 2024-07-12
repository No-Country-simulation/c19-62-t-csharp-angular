import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  BasicButtonConfig,
  DesignButton,
} from '../../interfaces/BasicButton.interface';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-basic-button',
  standalone: true,
  imports: [NgClass, NgOptimizedImage],
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicButtonComponent {
  btnConfig = input.required<BasicButtonConfig>();
  designBtn = input<DesignButton>('common');
}
