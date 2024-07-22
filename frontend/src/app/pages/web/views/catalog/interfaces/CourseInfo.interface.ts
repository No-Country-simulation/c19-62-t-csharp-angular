export interface CourseInfo {
  title: string;
  overview: string;
  details: DetailsCourse;
  tags: string[];
  description: string;
  syllabus: SectionCourse[];
  skillsToBeGained: string[];
  requirements: string[];
}

export interface DetailsCourse {
  instructor: string;
  level: level;
  students: number;
  ratings: number;
}

export interface SectionCourse {
  sectionName: string;
  contentCourse: ClassContent[];
}

export interface ClassContent {
  type: contentPage;
  title: string;
}

export type level = 'principiante' | 'intermedio' | 'avanzado';
export type contentPage = 'video' | 'documentation' | 'evaluation';
