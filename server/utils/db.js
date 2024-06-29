import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// mongoose.connect(URI);

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection Success");

  } catch (error) {
    console.log(error);
    process.exit(0);

  }
}

export default connectDb;

