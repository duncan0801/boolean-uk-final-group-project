import { Router } from "express";

import { getUser, createUser, updateUser } from "./controller";

const router = Router();

router.get("/:id", getUser);
router.post("/", createUser);
router.patch("/:id", updateUser);

export default router;
