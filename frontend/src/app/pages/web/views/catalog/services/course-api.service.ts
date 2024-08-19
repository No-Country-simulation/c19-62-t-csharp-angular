import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { CourseResponse } from '../interfaces/CourseResponse.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CourseApiService {
  constructor(private readonly http: HttpClient) {}

  public getAllCourses(): Observable<CourseResponse> {
    return this.http.get<CourseResponse>(
      `${environment.LEARN_TEACH_API}course`
    );
  }
}
