import User from "../models/user.model.js";

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome home");
    console.log("Hello");
  } catch (error) {
    console.log(error);
  }
};

//registration
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    //hash the password,
    //? later did in model
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound)

    // for message
    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      msg: "registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};

//login logic
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const userExist = await User.findOne({ email });
    // console.log("i am here")

    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check if password is valid
    const isPasswordValid = await userExist.comparePassword(password);

    if (isPasswordValid) {
      // Generate and send token upon successful login
      return res.status(200).json({
        msg: "Login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      // Send error response if password is invalid
      return res.status(401).json({ msg: "Invalid email or password" });
    }
  } catch (error) {
    // Handle server errors
    console.error("Error during login:", error);
    return res.status(500).json({ msg: "Server error" });
  }
};

//userlogic
const user = async (req, res) => {
  try {
    const userData = req.user;
    // console.log(userData);
    return res.status(200).json({ userData });
    // res.status(200).json({msg:"hi"})
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};

export default { home, register, login, user };
