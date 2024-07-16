import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { AuthCredentials } from '../interfaces/AuthCredentials.interface';
import { AuthResponse } from '../interfaces/AuthResponse.interface';
import { AuthRegister } from '../interfaces/AuthRegister.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  public login(credentials: AuthCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${environment.LEARN_TEACH_KEY}/Account/Login`,
      credentials
    );
  }

  public register(authData: AuthRegister): void {
    this.http
      .post(
        `${environment.LEARN_TEACH_KEY}/api/Account/Register`,
        this.formatBody(authData)
      )
      .subscribe((res) => console.log(res));
  }

  private formatBody(data: Record<string, string>): FormData {
    const formData: FormData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    return formData;
  }
}
