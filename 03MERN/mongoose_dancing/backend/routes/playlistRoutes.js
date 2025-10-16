import express from "express"
import {listPlaylist, createPlaylist, addSongToPlaylist} from "../controllers/playlistController.js"

const router = express.Router();

router.get("/", listPlaylist);
router.post("/", createPlaylist);
router.post("/:id/songs", addSongToPlaylist);

export default router;