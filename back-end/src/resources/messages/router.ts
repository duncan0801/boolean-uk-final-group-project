import { Router } from "express";
import { getMessagesByUserId, addMessage } from "./controller";
const router = Router();

router.get("/:id", getMessagesByUserId);
router.post("/", addMessage);

export default router;
