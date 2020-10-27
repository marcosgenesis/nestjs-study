import { Student } from 'src/student/student.entity';

export class createCourseDTO {
  title: string;
  profesor: string;
  students: Student[];
}
