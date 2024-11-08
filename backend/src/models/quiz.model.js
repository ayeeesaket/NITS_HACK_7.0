import mongoose, { Schema } from "mongoose";

const quizSchema = new Schema({
    category: {
        type: String,
        required: true,
        enum: ["3", "4", "4A"],
    },
    question: {
        type: String,
        required: true,
    },
    option1: {
        type: String,
        required: true,
    },
    option2: {
        type: String,
        required: true,
    },
    option3: {
        type: String,
        required: true,
    },
    option4: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

export const Quiz = mongoose.model("Quiz", quizSchema);