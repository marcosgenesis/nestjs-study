import { Body, Controller, Get, Post } from '@nestjs/common';
import { createStudentDTO } from './dtos/student.dto';
import { Student } from './student.entity';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private studentService: StudentService) {}

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
