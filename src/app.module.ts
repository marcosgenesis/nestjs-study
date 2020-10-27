import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { CourseModule } from './course/course.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), CourseModule, StudentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
