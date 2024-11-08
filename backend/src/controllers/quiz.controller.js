import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { Quiz } from "../models/quiz.model.js";

const addQuiz = asyncHandler(async (req, res) => {
    
    const { category, question, option1, option2, option3, option4 } = req.body;
    
    if (!category || !question || !option1 || !option2 || !option3 || !option4) {
        throw new ApiError(404, "All Fields Not Found.");
    }
    
    try {
        const newQuiz = await Quiz.create({
            category,
            question,
            option1,
            option2,
            option3,
            option4
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
    try {
        const count = Quiz.countDocuments;
        const randomIndex = Math.floor(Math.random() * count);
        const randomQuiz = await Quiz.findOne().skip(randomIndex);
        if (!randomQuiz) {
            return res
                .status(404)
                .json(
                    new ApiResponse(
                        404,
                        {},
                        "Quiz Not Found !"
                    )
                );
        }
        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    randomQuiz,
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