import { Controller, Get, Param, Put } from '@nestjs/common'

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents(@Param('teacherId') id: string) {
    return `Get students by teacher id ${id}`
  }

  @Put(':studentId')
  updateStudentTeacher(
    @Param('teacherId') tId: string,
    @Param('studentId') sId: string
  ) {
    return `Update student of id ${sId} by teacher id ${tId}`
  }
}
