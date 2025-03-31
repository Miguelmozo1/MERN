import { Router } from "express"
import { createBook, getAllBooks, getById, updateOneBook, removeBook } from '../controllers/book.controller.js';

const router = Router();

// other two routes are create and get all. Uses post and get
// from controller, looks like just 3 routes require an id and have unique functions(get, put, delete)

router.route("/books")
    .post(createBook)
    .get(getAllBooks)

router.route("/books/:id")
    .get(getById)
    .put(updateOneBook)
    .delete(removeBook)

export default router;
