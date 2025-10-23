import express from "express";
import {
  listSongs,
  addSong,
  updateSong,
  deleteSong,
  getOneSong,
} from "../controllers/songsController.js";

const router = express.Router();

router.get("/", listSongs);
router.post("/", addSong);
router.put("/:id", updateSong);
router.delete("/:id", deleteSong);
router.get("/:id", getOneSong);

export default router;
