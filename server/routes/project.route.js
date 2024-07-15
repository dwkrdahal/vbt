import {Router} from "express";
import {createProject, fetchproject} from "../controllers/project.controller.js";

//create instance
const projectRoute = Router();

//creating post router
projectRoute.post('/', createProject);

projectRoute.get('/', fetchproject )

export default projectRoute;
