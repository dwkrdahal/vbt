import { Router } from "express";
import adminController from "../controllers/admin.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import adminMiddleware from "../middlewares/admin.middleware.js";

const adminRoute = Router();

adminRoute.route("/users").get(authMiddleware, adminMiddleware, adminController.Users);

adminRoute.route("/contacts").get(authMiddleware, adminMiddleware, adminController.Contacts);

adminRoute.route("/services").get(authMiddleware, adminMiddleware, adminController.Services);

adminRoute.route("/projects").get(authMiddleware, adminMiddleware, adminController.Projects)

export default adminRoute;
