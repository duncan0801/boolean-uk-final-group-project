import { Router } from "express";
import {
	getMessagesByUserId,
	addMessage,
	getMessagesByConversationId,
} from "./controller";
const router = Router();

router.get("/:id", getMessagesByUserId);
router.get("/conversation/:id", getMessagesByConversationId);
router.post("/", addMessage);

export default router;
