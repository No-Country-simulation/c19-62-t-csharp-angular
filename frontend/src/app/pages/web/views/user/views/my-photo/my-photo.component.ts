import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PencilSvgComponent } from '@icons/pencil-svg.component';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { AppState } from 'app/core/store/app.state';
import { USER_SELECTORS } from 'app/core/store/user/user.selectors';
import { AvatarComponent } from 'app/shared/components/avatar/avatar.component';
import { BasicButtonComponent } from 'app/shared/components/basic-button/basic-button.component';
import verifyMaxSizeFile from 'app/shared/utils/converttoMb';

enum ActionsImage {
  Change = 'change-photo',
  Delete = 'delete-photo',
}

@Component({
  selector: 'app-my-photo',
  standalone: true,
  imports: [
    AvatarComponent,
    BasicButtonComponent,
    PencilSvgComponent,
    LetDirective,
  ],
  templateUrl: './my-photo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MyPhotoComponent {
  infoUser$ = this.store.select(USER_SELECTORS.selectUserBasicInfo);
  base64Image = signal<string>('');
  changeKey = ActionsImage.Change;
  dataButtons = [
    {
      text: 'Cambiar foto',
      action: ActionsImage.Change,
    },
    {
      text: 'Eliminar foto',
      action: ActionsImage.Delete,
    },
  ];

  constructor(private readonly store: Store<AppState>) {}

  public onClick(event: Event): void {
    if (!(event.target instanceof HTMLInputElement)) return;
    if (!event.target.files) return;
    if (event.target.files.length <= 0) return;

    const inputImage = event.target.files[0];
    const isHeavyFile = verifyMaxSizeFile(inputImage);

    if (isHeavyFile) return console.log('El archivo es demasiado pesado');

    const reader = new FileReader();
    reader.readAsDataURL(inputImage);
    reader.onload = (): void => this.base64Image.set(reader.result as string);
    reader.onerror = (): void => {
      console.error('Error al cargar la imagen');
    };
  }

  public onAction(action: string, element: HTMLInputElement): void {
    if (action === ActionsImage.Delete && this.base64Image() !== '') {
      return this.base64Image.set('');
    }

    if (action === ActionsImage.Delete && this.base64Image() === '') {
      return console.log('No hay imagen para eliminar');
    }

    if (action === ActionsImage.Change) {
      return element.click();
    }
  }
}
