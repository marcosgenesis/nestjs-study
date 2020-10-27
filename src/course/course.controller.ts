import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CourseResponse } from 'src/api-doc/course.response';
import { DeleteResult } from 'typeorm';
import { Course } from './course.entity';
import { CourseService } from './course.service';
import { createCourseDTO } from './dtos/course.dto';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @ApiOkResponse({ type: CourseResponse })
  @Get()
  async show(): Promise<Course[]> {
    return this.courseService.show();
  }

  @ApiCreatedResponse({ type: CourseResponse })
  @Post()
  async create(@Body() body: createCourseDTO): Promise<Course> {
    const course = await this.courseService.create(body);
    return course;
  }
  @Delete(':id')
  async destroy(@Param('id') id: string): Promise<DeleteResult> {
    return this.courseService.destroy(id);
  }
}
