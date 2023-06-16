import express from 'express';
import { UserRoutes } from '../modules/users/user,route';
import { SemesterRoutes } from '../modules/academicSemester/academicSemester.Route';
import { FacultyRoutes } from '../modules/academicFaculty/academicFaculty.Route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.Route';
import { StudentRoutes } from '../modules/student/student.Route';

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
    route: FacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/student',
    route: StudentRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

// router.use('/users/', UserRoutes);
// router.use('/academic-semesters', SemesterRoutes);

export default router;
