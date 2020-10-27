import { ApiProperty } from '@nestjs/swagger';
import { Student } from 'src/student/student.entity';
import { StudentResponse } from './student.response';

export class CourseResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  profesor: string;

  @ApiProperty({ type: StudentResponse })
  students: Student[];
}
