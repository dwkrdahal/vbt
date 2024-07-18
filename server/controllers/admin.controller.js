import Contact from "../models/contact.model.js";
import Project from "../models/project.model.js";
import Service from "../models/service.model.js";
import User from "../models/user.model.js";

//get All Users
const Users = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    console.log(`Error from backend admin user ${error}`);
    res.status(200).json({ message: "error" });
  }
};

//get All Contacts
const Contacts = async (req, res) => {
  try {
    const contacts = await Contact.find();

    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "Message not found" });
    }

    return res.status(200).json(contacts);
  } catch (error) {
    console.log(`Error from backend admin contact ${error}`);
    res.status(200).json({ message: "error" });
  }
};

const Services = async (req, res) => {
  try {
    const services = await Service.find();
    console.log(services);

    if (!services || services.length === 0) {
      return res.status(404).json({ message: "Services Unavailable" });
    }

    return res.status(200).json(services);
  } catch (error) {
    console.log(`Error from backend admin services ${error}`);
    res.status(200).json({ message: "error" });
  }
};

const Projects = async (req, res) => {
  try {
    const projects = await Project.find();
    
    if(!projects || projects.length ===0){
      return res.status(404).json({message: "Projects Not Found"})
    }

    return res.status(200).json(projects);
    
  } catch (error) {
    console.log(`Error from backend admin projects ${error}`);
    res.status(200).json({ message: "error" });
  }
}

export default { Users, Contacts, Services, Projects };
