import { Controller, Get, Put } from '@nestjs/common'

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'All Teachers'
  }

  @Get(':teacherId')
  getTeacherId() {
    return 'Get teacher by id'
  }
}
