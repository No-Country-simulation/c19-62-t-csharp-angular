import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.development';
import { Observable } from 'rxjs';
import { UserResponse } from '../interface/UserResponse.interface';
import { UserEditRequest } from '../interface/UserEditRequest.interface';
import formatFormData from 'app/shared/utils/formatFormData';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  public getUserData(email: string): Observable<UserResponse> {
    return this.http.get<UserResponse>(
      `${environment.LEARN_TEACH_API}User/${email}`
    );
  }

  public editProfile(
    email: string,
    body: UserEditRequest
  ): Observable<unknown> {
    const query = new URLSearchParams({
      email: email,
    });

    return this.http.put(
      `${environment.LEARN_TEACH_API}User/UpdateProfile?${query.toString()}`,
      formatFormData(body)
    );
  }
}
