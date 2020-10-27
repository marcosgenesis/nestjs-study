import { ApiProperty } from '@nestjs/swagger';
import { Course } from 'src/course/course.entity';
import { CourseResponse } from './course.response';

export class StudentResponse {
  @ApiProperty()
  name: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  enrollment: string;

  @ApiProperty({ type: CourseResponse })
  courses: Course[];
}
