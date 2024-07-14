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
    console.log(credentials);

    return this.http.post<AuthResponse>(
      `${environment.LEARN_TEACH_KEY}/Account/Login`,
      credentials
    );
  }

  public register(): void {
    const data: AuthRegister = {
      email: 'k@gmail.com',
      password: 'FieldTest2',
      firstName: 'FieldTest2',
      lastName: 'FieldTest2',
    };

    this.http
      .post(`${environment.LEARN_TEACH_KEY}/Account/Register`, data)
      .subscribe((res) => console.log(res));
  }

  public getTest(): void {
    this.http
      .get(`${environment.LEARN_TEACH_KEY}/User/GetAll`)
      .subscribe((res) => console.log(res));
  }

  public assignRole(): void {
    this.http
      .post(`${environment.LEARN_TEACH_KEY}/Role/Create?name=test2`, {})
      .subscribe((res) => console.log(res));
  }
}
