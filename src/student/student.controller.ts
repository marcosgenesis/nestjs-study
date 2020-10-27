import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { createStudentDTO } from './dtos/student.dto';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { StudentResponse } from '../api-doc/student.response';

@Controller('students')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @ApiOkResponse({ type: StudentResponse })
  @Get()
  async showStudents(): Promise<Student[]> {
    const students = this.studentService.showStudents();
    return students;
  }

  @Post()
  async create(@Body() body: createStudentDTO): Promise<Student> {
    const student = this.studentService.createStudente(body);
    return student;
  }
}
