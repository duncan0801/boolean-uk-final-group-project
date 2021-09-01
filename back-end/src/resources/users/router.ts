import { Router } from "express";

import { getUser, createUser, updateUser, getAllUsers } from "./controller";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.patch("/:id", updateUser);

export default router;
