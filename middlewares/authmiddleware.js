import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected route token based
//by adding next we are making it a middleware function
export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decode = JWT.verify(token, process.env.JWT_SECRET);
    //token is not present in the body, it is present in the header of the req

    req.user = decode;
    // we are attaching the decoded user info to the request object.
    // This means in any route after this middleware, you can directly access

    next();
  } catch (error) {}
};
//hamne test wale function me middle ware me requireSignIn lgaya hai, ab jab get request ayega for test to pehle ye middleware run hoga, isme pehle ham token extract krenge req.headers.authorization se phir ise verify karenge agar verify nahi hoga to next nhi chalega to loop me fasa rhega postman me

//admin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middleware",
    });
  }
};
//here we are getting the user id from req.user = decode from the token
//in login controller while using sign function we only passed _id therefore only that will be available
//_id is just enough to get all other information therefore we pass id only in jtw.sign otherwise we can pass other things as well
