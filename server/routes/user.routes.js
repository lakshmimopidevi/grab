import { Router } from "express";
const userRouter = Router();

/** import all controllers */
import * as controller from '../controllers/user.controller.js';
import { registerMail } from '../controllers/mailer.js';
import Auth, { localVariables } from '../middleware/auth.js';



/** POST Methods */
userRouter.route('/register').post(controller.register); // register user
userRouter.route('/registerMail').post(registerMail); // send the email
userRouter.route('/authenticate').post(controller.verifyUser, (req, res) => res.end()); // authenticate user
userRouter.route('/login').post(controller.verifyUser,controller.login); // login in app

/** GET Methods */
userRouter.route('/user/:username').get(controller.getUser) // user with username
userRouter.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP) // generate random OTP
userRouter.route('/verifyOTP').get(controller.verifyUser, controller.verifyOTP) // verify generated OTP
userRouter.route('/createResetSession').get(controller.createResetSession) // reset all the variables


/** PUT Methods */
userRouter.route('/updateuser').put(Auth, controller.updateUser); // is use to update the user profile
userRouter.route('/resetPassword').put(controller.verifyUser, controller.resetPassword); // use to reset password



export default userRouter;