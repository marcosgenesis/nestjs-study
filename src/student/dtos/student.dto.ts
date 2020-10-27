import { ApiProperty } from '@nestjs/swagger';

export class createStudentDTO {
  @ApiProperty()
  name: string;
  @ApiProperty()
  lastname: string;
  @ApiProperty()
  enrollment: string;
}
