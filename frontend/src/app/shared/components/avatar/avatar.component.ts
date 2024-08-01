import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { NgClass, NgOptimizedImage } from '@angular/common';
import { UserAcronymPipe } from '../../pipes/user-acronym.pipe';

export interface AvatarInfo {
  name: string;
  photo?: string;
}

type ImageType = 'src' | 'ngSrc';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [UserAcronymPipe, NgOptimizedImage, NgClass],
  templateUrl: './avatar.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  avatarInfo = input<AvatarInfo>({
    name: 'user',
    photo: '',
  });
  typeImage = input<ImageType>('ngSrc');
  customClass = input<string>('');
}
