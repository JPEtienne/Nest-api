import { Controller, Get, Put } from '@nestjs/common'

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents() {
    return 'Get students by teacher id'
  }

  @Put(':studentId')
  updateStudentTeacher() {
    return 'Update student by teacher id'
  }
}
