import Project from "../models/project.model.js";

const createProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const project = await newProject.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ msg: "server error" });
    console.log(error);
  }
};

const fetchproject = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({ msg: "server error" });
    console.log(error);
  }
}

export {createProject, fetchproject};
