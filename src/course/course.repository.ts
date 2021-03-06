import { EntityRepository, Repository } from 'typeorm';
import { Course } from './course.entity';
import { createCourseDTO } from './dtos/course.dto';

@EntityRepository(Course)
export class CourseRepository extends Repository<Course> {
  async createCourse(createCourse: createCourseDTO): Promise<Course> {
    const { profesor, title, students } = createCourse;
    const user = this.create();
    user.profesor = profesor;
    user.title = title;
    user.students = students;
    await user.save();
    return user;
  }
}
