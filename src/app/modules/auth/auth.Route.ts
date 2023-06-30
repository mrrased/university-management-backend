import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import { AuthValidation } from './auth.Validation';
import { AuthController } from './auth.Controller';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginZodSchema),
  AuthController.loginUser
);

router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenZodSchema),
  AuthController.refreshToken
);

export const LoginRoutes = router;
