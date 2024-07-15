import Service from "../models/service.model.js";

const services = async (req, res) => {
  try {
    const response = await Service.find();
    return res.status(200).json({ response });

    if (!response) {
      res.status(404).json({ msg: "Services not found" });
    }
  } catch (error) {
    console.log(`services: ${error}`);
    return res.status(500).json({ msg: "cannot fetch services" });
  }
};

export default services;
