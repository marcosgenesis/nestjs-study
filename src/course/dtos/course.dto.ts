import { ApiProperty } from '@nestjs/swagger';
import { StudentResponse } from 'src/api-doc/student.response';
import { Student } from 'src/student/student.entity';

export class createCourseDTO {
  @ApiProperty()
  title: string;
  @ApiProperty()
  profesor: string;
  @ApiProperty({ type: StudentResponse })
  students: Student[];
}
