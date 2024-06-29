import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
  username:{
    type: String,
    require: true
  },
  email:{
    type: String,
    require: true
  },
  phone:{
    type: String,
    require: true
  },
  password:{
    type: String,
    require: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
});

//? secure the password using the bcrypt
userSchema.pre('save', async function(){

  const user = this;

  if(!user.isModified("password")){
    next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound)
    user.password = hash_password
    
  } catch (error) {
    next(error);
  }
})


//json web token
//generate token function
userSchema.methods.generateToken = function () {

  try {
    return jwt.sign({
      userid: this._id.toString(),
      email: this.email,
      isAdmin: this.isAdmin,
    }, 
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "30d"
    }
  )
    
  } catch (error) {
    console.log(error);
  }
};

//comapre function
userSchema.methods.comparePassword = function (password) {
  try {
    return bcrypt.compare(password, this.password);
  } catch (error) {
    console.log(error);
  }
}

const User = new mongoose.model("User", userSchema)
export default User;