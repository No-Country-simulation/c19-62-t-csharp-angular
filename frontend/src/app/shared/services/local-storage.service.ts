import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem<T>(key: string): T | null {
    if (!this.hasItem(key)) return null;

    return JSON.parse(localStorage.getItem(key)!) as T;
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }

  private hasItem(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}
