import { Router } from 'express';
import authController from '../controllers/auth.controller.js'; 
import { signUpSchema, loginSchema } from '../validators/auth.validator.js'; 
import { authMiddleware, validate } from '../middlewares/index.js';

const router = Router();

// Home route
router
  .route("/")
  .get(authController.home); 

// Registration route
router
  .route("/reg")
  .post(validate(signUpSchema), authController.register);

// Login route
router
  .route("/login")
  .post(validate(loginSchema), authController.login);

  //user route
router
  .route("/user")
  .get(authMiddleware , authController.user)

export default router;
