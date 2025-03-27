import { createBook, getAllBooks, getById, updateOneBook, removeBook } from "../controllers/book.controller.js";
import { Router } from "express"

const router = Router();

router.route("/books")
    .post(createBook)
    .get(getAllBooks)

router.route("/books/:id")
    .get(getById)
    .put(updateOneBook)
    .delete(removeBook)

export default router;