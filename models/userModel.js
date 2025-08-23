import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
//isme es6 use kr rhe h islye export use krenge na ki module.export mongoose model me pehle compass k collection ka naam likhte hain aur dusra schema ka nam
//this export creates a class called model class which can be used in controller

// mongoose.model('users', userSchema) creates a Model class.
// That class (userModel in your code) has methods to interact with MongoDB like:
// find(), findOne(), save(), updateOne(), deleteOne(), etc.
