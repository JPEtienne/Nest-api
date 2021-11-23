import { Controller, Get, Param } from '@nestjs/common'
import { TeaherResponseDto } from './dto/teacher.dto'

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers(): TeaherResponseDto {
    return { teacherName: 'Willy' }
  }

  @Get(':teacherId')
  getTeacherId(@Param('teacherId') id: string): TeaherResponseDto {
    return { id }
  }
}
