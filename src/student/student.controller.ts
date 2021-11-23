import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students'
  }

  @Get(':studentId')
  getStudentId(@Param('studentId') studentId: string) {
    console.log(studentId)
    return `Get student with id ${studentId}`
  }

  @Post()
  createStudent(@Body('name') name: string) {
    return `Create student ${name}`
  }

  @Put(':studentId')
  updateStudent(@Param('studentId') id: string) {
    return `Update student by id ${id}`
  }
}
