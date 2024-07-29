import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MainLogoComponent } from 'app/shared/components/main-logo/main-logo.component';
import { WhoWeAreComponent } from './sections/who-we-are/who-we-are.component';
import { CommunityInvitationComponent } from './sections/community-invitation/community-invitation.component';
import { CoursesRecommendedComponent } from './sections/courses-recommended/courses-recommended.component';
import { MockupService } from 'app/shared/services/mockup.service';
import { Observable, of } from 'rxjs';
import { DetailsCourse } from '../catalog/interfaces/CourseInfo.interface';
import { LetDirective } from '@ngrx/component';
import { WorkWithUsComponent } from './sections/work-with-us/work-with-us.component';
import { LightLoaderComponent } from 'app/shared/components/light-loader/light-loader.component';
import { ErrorMessageComponent } from 'app/shared/components/error-message/error-message.component';
import { CarouselTestimonialsComponent } from './components/carousel-testimonials/carousel-testimonials.component';
import { Testimonial } from './interfaces/Testimonial.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainLogoComponent,
    WhoWeAreComponent,
    CommunityInvitationComponent,
    CoursesRecommendedComponent,
    LetDirective,
    WorkWithUsComponent,
    LightLoaderComponent,
    ErrorMessageComponent,
    CarouselTestimonialsComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements OnInit {
  readonly DEFER_ERROR_MESSAGE =
    'An error occurred while trying to load the page';
  popularCourses$: Observable<DetailsCourse[]> = of([]);
  freeCourses$: Observable<DetailsCourse[]> = of([]);
  trendingCourses$: Observable<DetailsCourse[]> = of([]);
  testimonials$: Observable<Testimonial[]> = of([]);

  constructor(private readonly mockupService: MockupService) {}

  ngOnInit(): void {
    this.popularCourses$ = this.mockupService.getPopularCourses();
    this.freeCourses$ = this.mockupService.getFreeCourses();
    this.trendingCourses$ = this.mockupService.getTrendingCourses();
    this.testimonials$ = this.mockupService.getTestimonials();
  }
}
