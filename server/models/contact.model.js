import {model, Schema} from "mongoose"


//create schema
const contactSchema = new Schema({
  username:{
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true
  },
  message: {
    type: String,
    require: true
  }
})


//create model
const Contact = new model("Contact", contactSchema)

export default Contact;