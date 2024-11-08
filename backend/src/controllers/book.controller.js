import asyncHandler from "../utils/asyncHandler.js";
import  ApiError  from "../utils/ApiError.js";
import  ApiResponse from "../utils/ApiResponse.js";
import { Book } from "../models/book.model.js";

const addChapter = asyncHandler(async (req, res)=>{
    const { title, content } = req.body;

    if(!title || !content){
        throw new ApiError(404,"Title or Content Not Found.");
    }

    try {
        const book = await Book.findOne({ title });
        if (book) {
            book.content.push(...content);
            await book.save();
            return res
                .status(201)
                .json(new ApiResponse(
                    201,
                    book,
                    "Content Added."
                ));
        } else {
            const newBook = await Book.create({
                title: title,
                content: content
            });
            return res
                .status(201)
                .json(new ApiResponse(
                    201,
                    newBook,
                    "Book Content Created."
                ));
        }
    } catch (error) {
        throw new ApiError(500, error);
    }
});

const getChapter = asyncHandler(async (req, res) => {
    const { title } = req.body;

    if (!title) {
        throw new ApiError(404, "Title Not Found.");
    }

    const getBook = await Book.findOne({ title });
    if (!getBook) {
        throw new ApiError(404, "Book On That Title Not Found.");
    }

    return res
        .status(200)
        .json(new ApiResponse(
            200,
            getBook,
            "Book Found."
        ));
});

export {
    addChapter,
    getChapter
};
