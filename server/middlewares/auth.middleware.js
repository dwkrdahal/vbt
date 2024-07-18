import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, token not provided" });
  }

  //getting token
  const jwtToken = token.replace("Bearer", "").trim();
  // console.log("token from middleware:", jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    // console.log(isVerified);

    if (!isVerified.email) {
      return res.status(401).json({ message: "Unauthorized. Invalid token" });
    }

    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    // console.log("user data",userData);

    if (!userData) {
      return res.status(401).json({ message: "Unauthorized. User not found" });
    }

    req.user = userData;
    req.token = token;
    req.userID = userData._id;
    req.isAdmin = userData.isAdmin;
    next();

  } catch (error) {
    console.log("error in middleware", error.message);
    return res.status(401).json({ msg: "Unauthorized. invalid token" });
  }
};

export default authMiddleware;
