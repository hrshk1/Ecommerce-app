import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authmiddleware.js";

//router object
const router = express.Router();
//whenever you do routing in a separate file you have to add router object
//routing is done to make endpoints and make routes/roads for performing crud operations (Create read update delete)

//routing
//REGISTER || METHOD POST
//since we are following mvc pattern for backend development therefore we'll be writing the async function in separate controller
//mvc is model view and control
router.post("/register", registerController);

//Login || Post
router.post("/login", loginController);

//Protected Route
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
