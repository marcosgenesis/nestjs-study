import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { Course } from './course.entity';
import { CourseRepository } from './course.repository';
import { createCourseDTO } from './dtos/course.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseRepository)
    private courseRepository: CourseRepository,
  ) {}
  async create(createCourseDto: createCourseDTO): Promise<Course> {
    const course = await this.courseRepository.createCourse(createCourseDto);
    return course;
  }
  async show() {
    return this.courseRepository.find({ relations: ['students'] });
  }
  async destroy(id: string): Promise<DeleteResult> {
    return this.courseRepository.delete({ id: id });
  }
}
