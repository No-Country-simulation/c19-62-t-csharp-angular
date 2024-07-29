import { Injectable } from '@angular/core';
import {
  CourseInfo,
  DetailsCourse,
} from 'app/pages/web/views/catalog/interfaces/CourseInfo.interface';
import { Observable, of } from 'rxjs';
import { Testimonial } from 'app/pages/web/views/home/interfaces/Testimonial.interface';
import freeCourses from '@data/home/freeCourses.json';
import trendingCourses from '@data/home/trendingCourses.json';
import popularCourses from '@data/home/popularCourses.json';
import testimonials from '@data/home/testimonials.json';
import courseTest from '@data/catalog/course.example.json';
import courses from '@data/catalog/courses.json';

@Injectable({
  providedIn: 'root',
})
export class MockupService {
  //  Home page data
  public getFreeCourses(): Observable<DetailsCourse[]> {
    return of(this.assertData<DetailsCourse[]>(freeCourses));
  }

  public getTrendingCourses(): Observable<DetailsCourse[]> {
    return of(this.assertData<DetailsCourse[]>(trendingCourses));
  }

  public getPopularCourses(): Observable<DetailsCourse[]> {
    return of(this.assertData<DetailsCourse[]>(popularCourses));
  }

  public getTestimonials(): Observable<Testimonial[]> {
    return of(this.assertData<Testimonial[]>(testimonials));
  }

  //  Catalog page data

  public getCourseInfo(): Observable<CourseInfo> {
    return of(this.assertData<CourseInfo>(courseTest));
  }

  public getListCourse(): Observable<DetailsCourse[]> {
    return of(this.assertData<DetailsCourse[]>(courses));
  }

  private assertData<T>(data: unknown): T {
    return data as T;
  }
}
