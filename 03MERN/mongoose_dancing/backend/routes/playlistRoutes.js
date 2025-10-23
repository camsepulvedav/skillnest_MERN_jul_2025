import express from "express";
import {
  listPlaylist,
  createPlaylist,
  updatePlaylist,
  deletePlaylist,
  getOnePlaylist,
} from "../controllers/playlistController.js";

const router = express.Router();

router.get("/", listPlaylist);
router.post("/", createPlaylist);
router.put("/:id", updatePlaylist);
router.delete("/:id", deletePlaylist);
router.get("/:id", getOnePlaylist);

export default router;
