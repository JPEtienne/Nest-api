import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import {
  CreateStudentDto,
  UpdateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
} from './dto/student.dto'

@Controller('students')
export class StudentController {
  @Get()
  getStudents(): FindStudentResponseDto[] {
    return []
  }

  @Get(':studentId')
  getStudentId(@Param('studentId') studentId: string): FindStudentResponseDto {
    console.log(studentId)
    return { name: studentId }
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): FindStudentResponseDto {
    return { name: body.name }
  }

  @Put(':studentId')
  updateStudent(
    @Param('studentId') id: string,
    @Body() body: UpdateStudentDto
  ): StudentResponseDto {
    return { id: id, name: body.name, teacher: body.teacher }
  }
}
