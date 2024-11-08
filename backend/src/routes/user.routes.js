import { Router } from "express";
import { registerUser, logInUser, logOutUser, dashboard } from "../controllers/user.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(logInUser);

// protected route
router.route("/logout").post(verifyJWT, logOutUser);
router.route("/dashboard").get(verifyJWT, dashboard);

export default router;