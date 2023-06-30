import express from 'express';
import { UserRoutes } from '../modules/users/user,route';
import { SemesterRoutes } from '../modules/academicSemester/academicSemester.Route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.Route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.Route';
import { StudentRoutes } from '../modules/student/student.Route';
import { FacultyRoutes } from '../modules/faculty/faculty.route';
import { AdminRoutes } from '../modules/admin/admin.Route';
import { LoginRoutes } from '../modules/auth/auth.Route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: SemesterRoutes,
  },
  {
    path: '/academic-faculty',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/student',
    route: StudentRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/auth',
    route: LoginRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

// router.use('/users/', UserRoutes);
// router.use('/academic-semesters', SemesterRoutes);

export default router;
