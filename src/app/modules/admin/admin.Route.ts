import express from 'express';
import { AdminController } from './admin.Controller';
import validateRequest from '../../../middlewares/validateRequest';
import { AdminValidation } from './admin.Validation';

const router = express.Router();

router.get('/', AdminController.getAllAdmins);

router.get('/:id', AdminController.getSingleAdmin);

router.patch(
  '/:id',
  validateRequest(AdminValidation.updateAdmin),
  AdminController.updateAdmin
);

router.delete('/:id', AdminController.deleteAdmin);

export const AdminRoutes = router;
