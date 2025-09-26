import express from "express"
import { listSong, createPlaylist } from "../controllers/musicControllers.js"

const router = express.Router();

router.get("/cancion", listSong);
router.post("/playlist", createPlaylist);

export default router