import { Router } from "express";
import adminController from "../controllers/admin.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import adminMiddleware from "../middlewares/admin.middleware.js";

const adminRoute = Router();

adminRoute
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.getAllUsers);

adminRoute
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

adminRoute
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, adminController.getUserById);

adminRoute
  .route("users/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.updateUserById);

adminRoute
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminController.getAllContacts);

adminRoute
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteContactById);

adminRoute
  .route("/contacts/:id")
  .get(authMiddleware, adminMiddleware, adminController.getContactById);

adminRoute
  .route("contacts/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.updateContactById);

adminRoute
  .route("/services")
  .get(authMiddleware, adminMiddleware, adminController.getAllServices);

adminRoute
  .route("/services/:id")
  .get(authMiddleware, adminMiddleware, adminController.getServiceById);

adminRoute
  .route("/services/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteServiceById);

adminRoute
  .route("/projects")
  .get(authMiddleware, adminMiddleware, adminController.getAllProjects);

adminRoute
  .route("/projects/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteProjectById);

adminRoute
  .route("/projects/:id")
  .get(authMiddleware, adminMiddleware, adminController.getProjectById);

export default adminRoute;
