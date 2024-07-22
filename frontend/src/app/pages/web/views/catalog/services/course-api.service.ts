import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';
import courseTest from '../../../data/course.example.json';
import { CourseInfo } from '../interfaces/CourseInfo.interface';

@Injectable({
  providedIn: 'root',
})
export class CourseApiService {
  constructor(private readonly http: HttpClient) {}

  public fakeDataCourse(): Observable<CourseInfo> {
    const data = courseTest as CourseInfo;

    return of(data).pipe(delay(1000));
  }
}
