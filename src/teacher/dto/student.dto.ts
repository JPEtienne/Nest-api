export class StudentResponseDto {
  id?: string
  studentName?: string
  teacherName?: string
}

export class StudentByTeacherResponseDto {
  studentId?: string
  studentName?: string
  teacherId?: string
  teacherName?: string
}
