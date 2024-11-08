import { Router } from "express";
import { addQuiz, getQuiz } from "../controllers/quiz.controller.js";

const router = Router();

router.route("/addQuiz").post(addQuiz);
router.route("/getQuiz").get(getQuiz);

export default router;