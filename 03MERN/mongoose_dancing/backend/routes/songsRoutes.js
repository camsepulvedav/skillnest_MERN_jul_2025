import express from "express";
import {listSongs, addSong, getOneSong, updateSong, deleteSong} from "../controllers/songsController.js"

const router = express.Router();

router.get("/", listSongs);
router.post("/", addSong);
router.get("/:id", getOneSong);
router.put("/:id", updateSong);
router.delete("/:id", deleteSong);

export default router