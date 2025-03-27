import Book from '../models/book.model.js';

async function createBook(req, res) {
    try {
        const newBook = await Book.create(req.body);
        res.json(newBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}

async function getAllBooks(req, res) {
    try {
        const allBooks = await Book.find();
        res.json(allBooks);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function getById(req, res) {
    try {
        const book = await Book.findById(req.params.id);
        res.json(book);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function updateOneBook(req, res) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function removeBook(req, res) {
    try {
        const removedBook = await Book.findByIdAndDelete(req.params.id);
        res.json(removedBook)
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}


export {
    createBook, getAllBooks, getById, updateOneBook, removeBook
};