import { EntityRepository, Repository } from 'typeorm';
import { createStudentDTO } from './dtos/student.dto';
import { Student } from './student.entity';

@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {
  async createStudent(createStudentDto: createStudentDTO): Promise<Student> {
    const { name, lastname, enrollment } = createStudentDto;
    const user = this.create();
    user.name = name;
    user.lastname = lastname;
    user.enrollment = enrollment;
    await this.save(user);
    return user;
  }
}
