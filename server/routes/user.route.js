import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { deleteUser } from "../controllers/user.controller.js";

const router = express.Router();

router.delete("/:id", verifyToken, deleteUser);

export default router;
