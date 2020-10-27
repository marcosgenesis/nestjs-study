import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentRepository } from './student.repository';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';

@Module({ imports: [TypeOrmModule.forFeature([StudentRepository])], providers: [StudentService], controllers: [StudentController] })
export class StudentModule {}
