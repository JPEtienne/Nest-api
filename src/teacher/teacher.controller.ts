import { Controller, Get, Param } from '@nestjs/common'

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'All Teachers'
  }

  @Get(':teacherId')
  getTeacherId(@Param('teacherId') id: string) {
    return `Get teacher by id ${id}`
  }
}
