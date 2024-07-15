import {model, Schema} from "mongoose";

// creating schema

const serviceSchema = new Schema({
  service: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
})

const Service = new model("Service", serviceSchema);

export default Service;



