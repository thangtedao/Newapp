import express from "express";
import { getUser, getUserFriends, addRemoveFriend } from "../controller/users";
import { verifyToken } from "../middleware/auth";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;