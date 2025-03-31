import { model, Schema } from 'mongoose';

const BooksSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required!"],
            minlength: [2, "Title must be at least 2 characters long!"],
            maxlength: [255, "Title must be less than 255 characters"]
        },
        author: {
            type: String,
            required: [true, "Author is required!"],
            minlength: [2, "Author must be at least 2 charcters long!"],
            maxlength: [255, "Author must be less than 225 charcters long!"]
        },
        pages: {
            type: Number,
            required: [true, "Page count is required!"],
            min: [2, "Page count has to be at least 2!"]
        },
        isAvailable: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

const Book = model("Book", BooksSchema)

export default Book;