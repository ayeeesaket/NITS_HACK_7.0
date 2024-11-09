import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { Quiz } from "../models/quiz.model.js";

const addQuiz = asyncHandler(async (req, res) => {
    
    const { category, question, option1, option2, option3, option4 , answer } = req.body;
    
    if (!category || !question || !option1 || !option2 || !option3 || !option4 || !answer) {
        throw new ApiError(404, "All Fields Not Found.");
    }
    
    try {
        const newQuiz = await Quiz.create({
            category,
            question,
            option1,
            option2,
            option3,
            option4,
            answer
        });
        return res
            .status(201)
            .json(new ApiResponse(
                201,
                newQuiz,
                "Quiz Added Successfully."
            ))
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

const getQuiz = asyncHandler(async (req, res) => {
    const { title } = req.body;
    if (!title) {
        throw new ApiError(404, "All Fields Are Required.");
    }
    const foundQuiz = await Quiz.find({
        category: title,
    });
    try {
        const length = foundQuiz.length;
        const randomIndex = Math.floor(Math.random() * length);
        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    foundQuiz[randomIndex],
                    "Random Quiz Fetched !"
                )
            );
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

export {
    addQuiz,
    getQuiz
};