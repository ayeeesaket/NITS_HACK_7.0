import { Router } from "express";
import { addChapter, getChapter } from "../controllers/book.controller.js";

const bookRouter = Router();

bookRouter.route("/addChapter").post(addChapter);
bookRouter.route("/getChapter").post(getChapter);

export default bookRouter;