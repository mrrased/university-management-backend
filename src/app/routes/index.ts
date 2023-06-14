import express from 'express';
import { UserRoutes } from '../modules/users/user,route';
import { SemesterRoutes } from '../modules/academicSemester/academicSemester.Route';
import { FacultyRoutes } from '../modules/academicFaculty/academicFaculty.Route';

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
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

// router.use('/users/', UserRoutes);
// router.use('/academic-semesters', SemesterRoutes);

export default router;
