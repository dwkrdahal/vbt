//express
import express from "express";

//routes
import authRoute from "./routes/auth.route.js";
import contactRoute from "./routes/contact.route.js";
import serviceRoute from "./routes/service.route.js";
import projectRoute from "./routes/project.route.js";
import adminRoute from "./routes/admin.route.js";

//dbs
import connectDb from "./utils/db.js";

//middlewares
import errorMiddleware from "./middlewares/error.middleware.js";

//cors
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
app.use("/api/data", serviceRoute);
app.use("/api/project", projectRoute);
app.use("/api/admin", adminRoute);

//error middleware
app.use(errorMiddleware);

const PORT = 3000;

connectDb().then(() => {
  app.listen(PORT, ()=> {
    console.log(`Server is running...`);
    console.log(`follow the link http://localhost:${PORT}`);
  })
});