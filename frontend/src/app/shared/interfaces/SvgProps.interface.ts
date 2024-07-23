import { InputSignal } from '@angular/core';
import { CustomClass } from './CustomClass.interface';

export interface SvgProps extends Partial<CustomClass> {
  size: InputSignal<number>;
}
