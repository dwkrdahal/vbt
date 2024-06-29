import { Router } from 'express';

import contactForm from '../controllers/contact.controller.js';

import contactSchema from '../validators/contact.validator.js';
import validate from '../middlewares/validate.middleware.js';

const contactRoute = Router();

contactRoute
  .route("/contact")
  .post(validate(contactSchema) ,contactForm); 

export default contactRoute;