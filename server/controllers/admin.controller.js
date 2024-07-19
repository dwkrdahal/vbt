import Contact from "../models/contact.model.js";
import Project from "../models/project.model.js";
import Service from "../models/service.model.js";
import User from "../models/user.model.js";

//get All Users
const getAllUsers = async (req, res) => {
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
const getAllContacts = async (req, res) => {
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

const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    // console.log(services);

    if (!services || services.length === 0) {
      return res.status(404).json({ message: "Services Unavailable" });
    }

    return res.status(200).json(services);
  } catch (error) {
    next(error);
  }
};

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    if (!projects || projects.length === 0) {
      return res.status(404).json({ message: "Projects Not Found" });
    }

    return res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

// delete user by id logic
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User deleted SUccessfully" });
  } catch (error) {
    next(error);
  }
};

//deleyte service by id logic
const deleteServiceById = async (req, res) => {
  try {
    const id = req.params.id;
    await Service.deleteOne({ _id: id });
    return res.status(200).json({ message: "service deleted" });
  } catch (error) {
    next(error);
  }
};

const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact deleted" });
  } catch (error) {
    next(error);
  }
};

const deleteProjectById = async (req, res) => {
  const id = req.params.id;
  await Project.deleteOne({ _id: id });
  return res.status(200).json({ message: "project Deleted" });
};

const getServiceById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Service.findOne({ _id: id });
    res.status(200).json(data);
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    res.status(200).json(data);
    // console.log("User fetched");
  } catch (error) {
    console.log(error);
  }
};

const getProjectById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Project.findOne({ _id: id });
    res.status(200).json(data);
    console.log("projected fetched");
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Contact.findOne({ _id: id });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    console.log("i am here");
    const id = req.params.id;
    const updatedUserData = req.body;

    const result = await User.updateOne({ _id: id }, { $set: updatedUserData });

    if (result.nModified === 0) {
      return res.status(404).json({ message: "User not found or data unchanged" });
    }

    return res.status(202).json({message: "user updated"})
  } catch (error) {
    console.log("err",error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateContactById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedContactData = req.body;

    await Contact.updateOne({ _id: id },{$set: updatedContactData});

    return res.status(202).json({ message: "contact updated" });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllUsers,
  getAllContacts,
  getAllServices,
  getAllProjects,
  deleteUserById,
  deleteServiceById,
  deleteContactById,
  deleteProjectById,
  getServiceById,
  getUserById,
  getProjectById,
  getContactById,
  updateUserById,
  updateContactById,
};
