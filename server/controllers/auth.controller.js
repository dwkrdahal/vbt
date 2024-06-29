import User from "../models/user.model.js";
import bcrypt from 'bcrypt';

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome home");
    console.log("Hello")
  } catch (error) {
    console.log(error);
  }
};

//registration
const register = async (req, res) => {
  try {

    const {username, email, phone, password } = req.body

    const userExist =await User.findOne({ email });

    if(userExist) {
      return res
        .status(400)
        .json({msg: "Email already exists"})
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
      password 
    });

    res.status(201).json({ 
      msg: "registration successful", 
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json({msg: "server error" });
  }
};


//login function
const login = async (req, res) => {
  try {
    const {email, password} = req.body;

    const userExist = await User.findOne({email});

    if(!userExist){
      res.status(400).json({msg: "invalid credential" });
    }
    
    // const isPasswordValid = await bcrypt.compare(password, userExist.password);
    const isPasswordValid = await userExist.comparePassword(password);

    if(isPasswordValid){
      res.status(200).json({
        msg: "login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      })
    } else {
      res.status(401).json({msg: "invalid email or password"})
    }

  } catch (error) {
    res.status(500).json({msg: "server error" });

    next(error);
  }
}

export default { home, register, login };
