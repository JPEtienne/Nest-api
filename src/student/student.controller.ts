import { Controller, Get, Post, Put } from '@nestjs/common'

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students'
  }

  @Get(':studentId')
  getStudentId() {
    return 'Get student by id'
  }

  @Post()
  createStudent() {
    return 'Create student'
  }

  @Put(':studentId')
  updateStudent() {
    return 'Update student by id'
  }
}
