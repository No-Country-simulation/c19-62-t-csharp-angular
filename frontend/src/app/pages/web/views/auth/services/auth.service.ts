import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, throwError } from 'rxjs';
import { AuthCredentials } from '../interfaces/AuthCredentials.interface';
import { AuthResponse } from '../interfaces/AuthResponse.interface';
import { AuthRegister } from '../interfaces/AuthRegister.interface';
import { RegisterResponse } from '../interfaces/RegisterResponse.interface';
import { AuthRecovery } from '../interfaces/AuthRecovery.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  public login(credentials: AuthCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${'<YOUR_GoogleAPIKey_HERE>'}/api/Account/Login`,
      this.formatBody(credentials)
    );
  }

  public register(authData: AuthRegister): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(
      `${'<YOUR_GoogleAPIKey_HERE>'}/api/Account/Register`,
      this.formatBody(authData)
    );
  }

  public recoveryPassword(data: AuthRecovery): Observable<never> {
    this.formatBody(data);
    return throwError(() => new Error('Not implemented')).pipe(delay(1000));
  }

  private formatBody(data: Record<string, string>): FormData {
    const formData: FormData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    return formData;
  }
}
