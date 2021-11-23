import { Controller, Get, Param, Put } from '@nestjs/common'
import {
  StudentByTeacherResponseDto,
  StudentResponseDto,
} from './dto/student.dto'

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents(@Param('teacherId') id: string): StudentResponseDto {
    return { id }
  }

  @Put(':studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string
  ): StudentByTeacherResponseDto {
    return { teacherId, studentId }
  }
}
