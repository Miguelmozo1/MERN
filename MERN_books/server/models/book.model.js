import { model, Schema } from 'mongoose';
const BooksSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required!"],
            minlength: [2, "Must be greater than 2 characters!"],
            maxlength: [255, "Must be less than 155 characters!"]
        },
        author: {
            type: String,
            required: [true, "Author is required!"],
            minlength: [2, "Must be greater than 2 characters"],
            maxlength: [255, "Must be less than 255 characters"]
        },
        pages: {
            type: String,
            required: [true, "Author is required!"],
            minlength: [1, "Must be greater than 1 characters"],
        },
        isAvailable: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

const Book = model("Book", BooksSchema);

export default Book;