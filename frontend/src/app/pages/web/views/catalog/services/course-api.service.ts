import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import courseTest from '../../../data/course.example.json';
import courses from '../../../data/courses.json';
import { CourseInfo, DetailsCourse } from '../interfaces/CourseInfo.interface';

@Injectable({
  providedIn: 'root',
})
export class CourseApiService {
  constructor(private readonly http: HttpClient) {}

  public fakeDataCourse(): Observable<CourseInfo> {
    const data = courseTest as CourseInfo;

    return of(data);
  }

  public fakeListCourse(): Observable<DetailsCourse[]> {
    const data = courses as DetailsCourse[];

    return of(data);
  }
}
