import Contact from "../models/contact.model.js";

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({message: "message sent successfully"})
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "message not delivered"})
  }
};

export default contactForm;