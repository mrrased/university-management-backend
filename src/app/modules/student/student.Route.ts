import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import { StudentsController } from './student.Controller';
import { StudentValidation } from './student.Validation';

const router = express.Router();

router.get('/', StudentsController.getAllStudents);
router.get('/:id', StudentsController.getSingleStudent);
router.delete('/:id', StudentsController.deleteStudent);

router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudentZodSchema),
  StudentsController.updateStudent
);

export const StudentRoutes = router;
