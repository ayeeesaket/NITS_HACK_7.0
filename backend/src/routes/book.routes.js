import { Router } from "express";
import { addChapter, getChapter, getTranslatedChapter } from "../controllers/book.controller.js";

const bookRouter = Router();

bookRouter.route("/addChapter").post(addChapter);
bookRouter.route("/getChapter").post(getChapter);
bookRouter.route("/translateChapter").post(getTranslatedChapter);

export default bookRouter;