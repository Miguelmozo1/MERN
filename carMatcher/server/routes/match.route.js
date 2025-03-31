import { Router } from "express"
import { createMatch } from "../controllers/match.controller.js";

const router = Router();

router.route("/match")
    .get(createMatch)


export default router;