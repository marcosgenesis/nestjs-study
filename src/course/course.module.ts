import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseRepository } from './course.repository';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CourseRepository])],
  providers: [CourseService],
  controllers: [CourseController],
})
export class CourseModule {}
