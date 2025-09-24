import express from "express";
import {listUsers, createUser, searchUsers, deleteUser, updateUsers} from "../controllers/userController.js";

const router = express.Router();

router.get("/", listUsers);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUsers);
// router.get("/search", searchUsers);

export default router;