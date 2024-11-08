import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        enum: ["3", "4", "4A"]
    },
    content:{
        type: [String],
        required:true,
        default:[]
    }
},
{
    timestamps:true
});

export const Book = mongoose.model("Book",bookSchema)