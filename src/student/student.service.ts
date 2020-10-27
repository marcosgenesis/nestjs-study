import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createStudentDTO } from './dtos/student.dto';
import { Student } from './student.entity';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentRepository)
    private studentRepository: StudentRepository,
  ) {}

  async createStudente(createStudent: createStudentDTO): Promise<Student> {
    return this.studentRepository.createStudent(createStudent);
  }

  async showStudents(): Promise<Student[]> {
    return this.studentRepository.find({ relations: ['courses'] });
  }
}
