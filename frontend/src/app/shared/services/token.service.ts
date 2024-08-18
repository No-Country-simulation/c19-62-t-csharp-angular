import { Injectable, inject } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly TOKEN_KEY = 'learn-teach-token';
  private readonly localStorage = inject(LocalStorageService);

  public saveToken(token: string): void {
    this.localStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return this.localStorage.getItem<string>(this.TOKEN_KEY);
  }

  public removeToken(): void {
    this.localStorage.removeItem(this.TOKEN_KEY);
  }
}
