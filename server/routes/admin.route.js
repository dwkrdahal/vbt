import { Router } from "express";
import adminController from "../controllers/admin.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import adminMiddleware from "../middlewares/admin.middleware.js";

const adminRoute = Router();

adminRoute
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.Users);

adminRoute
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

adminRoute
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminController.Contacts);

adminRoute
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteContactById)

adminRoute
  .route("/services")
  .get(authMiddleware, adminMiddleware, adminController.Services);

adminRoute
  .route("/services/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteServiceById)

adminRoute
  .route("/projects")
  .get(authMiddleware, adminMiddleware, adminController.Projects);

adminRoute
  .route("/projects/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteProjectById)

export default adminRoute;
