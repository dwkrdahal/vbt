
import express from "express";

import authRoute from "./routes/auth.route.js";
import contactRoute from "./routes/contact.route.js";

import connectDb from "./utils/db.js";
import errorMiddleware from "./middlewares/error.middleware.js";

import cors from "cors";

var corsOption = {
  origin: "http://localhost:5173",
  methods: "POST, GET, PUT, DELETE, PATCH, HEAD",
  credentials: true,
}


const app = express();

app.use(cors(corsOption));
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

//error middleware
app.use(errorMiddleware);

const PORT = 3000;

connectDb().then(() => {
  app.listen(PORT, ()=> {
    console.log(`Server is running...`);
    console.log(`follow the link http://localhost:${PORT}`);
  })
});