import { Schema, model } from "mongoose";

//create schema
const LocationSchema = new Schema({
  address: String,
  city: String,
  district: String,
  state: String,
  country: String,
  coordinates: {
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
  }
});

const YearSchema = new Schema({
  start: {
    type: Date,
    
  },
  completion: {
    type: Date,
    
  },
});

const ContactSchema = new Schema({
  email: String,
  phone: String,
});

const DesignArchitectSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  name: String,
  email: String
}, { _id: false });

const ImageSchema = new Schema({
  url: String,
  caption: String,
});

const ProjectSchema = new Schema({
  title: { 
    type: String, 
     
  },
  description: { 
    type: String, 
     
  },
  location: { 
    type: LocationSchema, 
     
  },
  architectureStyle: { 
    type: String, 
     
  },
  projectType: { 
    type: String, 
     
  },
  siteArea: {
    value: { type: Number,  },
    unit: { type: String,  },
  },
  builtUpArea: {
    value: { type: Number,  },
    unit: { type: String,  },
  },
  year: { type: YearSchema,  },
  designArchitect: { 
    type: DesignArchitectSchema, 
  },
  images: [ImageSchema],
  client: {
    name: { type: String,  },
    contact: ContactSchema,
  },
  contractor: {
    name: { type: String,  },
    contact: ContactSchema,
  },
  materialsUsed: [String],
  sustainabilityFeatures: [String],
  projectStatus: { type: String,  },
});

//create model
const Project = model("Project", ProjectSchema);

//export model
export default Project;
