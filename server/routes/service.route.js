import { Router } from "express";
import services from "../controllers/service.controller.js";

const serviceRoute = Router();

serviceRoute.route("/service").get(services);

export default serviceRoute;
