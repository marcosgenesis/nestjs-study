import { Body, Controller, Get, Post } from '@nestjs/common';
import { Course } from './course.entity';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}
  @Get()
  async show(): Promise<Course[]> {
    return this.courseService.show();
  }
  @Post()
  async create(@Body() body: Course): Promise<Course> {
    const course = await this.courseService.create(body);
    return course;
  }
}
