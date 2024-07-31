import { DetailsCourse } from 'app/pages/web/views/catalog/interfaces/CourseInfo.interface';

export interface UserState {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  image: string | null;
  password: string | null;
  role: string | null;
  isLoaded: boolean;
  isError: boolean;
  coursesFavorites: DetailsCourse[];
  coursesEnrolled: DetailsCourse[];
  coursesCompleted: DetailsCourse[];
}
