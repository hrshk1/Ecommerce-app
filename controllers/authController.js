import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validation
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "email is required" });
    }
    if (!password) {
      return res.send({ error: "password is required" });
    }
    if (!phone) {
      return res.send({ error: "Phone No. is required" });
    }
    if (!address) {
      return res.send({ error: "Address is required" });
    }

    //check existing user
    const existinguser = await userModel.findOne({ email });
    if (existinguser) {
      return res.status(200).send({
        success: true,
        message: "Already register please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //hashpassword authhelper me hai.. vaha argument hai password..aur return kar rha hai password hash krne k bad
    //usme usermodel ki jarurat nahi thi kyunki vaha se import krke hm yaha la rhe h

    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "User Registered Succesfully",
      user,
    });
    //userModel is default exported class of userModel file
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};

export const loginController = 
