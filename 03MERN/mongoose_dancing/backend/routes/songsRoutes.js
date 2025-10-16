import express from "express"
import {listSongs, addSong, getOneSong} from "../controllers/songsController.js"

const router = express.Router();

router.get("/", listSongs);
router.post("/", addSong);
router.get("/:id", getOneSong);

export default router