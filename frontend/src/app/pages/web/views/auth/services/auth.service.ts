import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, throwError } from 'rxjs';
import { AuthCredentials } from '../interfaces/AuthCredentials.interface';
import { AuthResponse } from '../interfaces/AuthResponse.interface';
import { AuthRegister } from '../interfaces/AuthRegister.interface';
import { RegisterResponse } from '../interfaces/RegisterResponse.interface';
import { AuthRecovery } from '../interfaces/AuthRecovery.interface';
import { environment } from 'environments/environment.development';
import formatFormData from 'app/shared/utils/formatFormData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  public login(credentials: AuthCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${environment.LEARN_TEACH_API}User/Login`,
      formatFormData(credentials)
    );
  }

  public register(authData: AuthRegister): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(
      `${environment.LEARN_TEACH_API}User/Register`,
      formatFormData(authData)
    );
  }

  public recoveryPassword(data: AuthRecovery): Observable<never> {
    formatFormData(data);
    return throwError(() => new Error('Not implemented')).pipe(delay(1000));
  }
}
