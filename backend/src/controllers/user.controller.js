import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { COOKIE_OPTIONS } from "../constants.js";

const registerUser = asyncHandler(async (req, res) => {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
        throw new ApiError(404, "All Fields Are Required.");
    }

    try {
        const newUser = await User.create({
            name,
            username,
            email,
            password
        });
        return res
            .status(201)
            .json(new ApiResponse(
                201,
                newUser,
                "User Created."
            ));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

const generateToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const token = user.generateToken();
        return token;
    } catch (error) {
        throw new ApiError(500, "Internal Server Error.");
    }
}

const logInUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const userFound = await User.findOne({ email });
    if (!userFound) {
        throw new ApiError(404, "User Not Found.");
    }

    const passwordValid = await userFound.isPasswordCorrect(password);
    if (!passwordValid) {
        throw new ApiError(401, "Invalid Password.");
    }

    try {
        const token = await generateToken(userFound._id);
        const user = await User.findById(userFound._id).select("-password");
        return res
            .status(202)
            .cookie("token", token, COOKIE_OPTIONS)
            .json(
                new ApiResponse(
                    202,
                    user,
                    "User Logged In.",
                ),
            );
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error.");
    }
});

const logOutUser = asyncHandler(async (req, res) => {
    try {
        return res
            .status(200)
            .clearCookie("token", COOKIE_OPTIONS)
            .json(
                new ApiResponse(
                    200,
                    {},
                    "User Logged Out."
                ),
            );
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error.");
    }
});

const dashboard = asyncHandler(async (req, res) => {
    const user = req.user;
    try {
        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    user,
                    "User Data Found!",
                ),
            );
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error.");
    }
});

export {
    registerUser,
    logInUser,
    logOutUser,
    dashboard
};