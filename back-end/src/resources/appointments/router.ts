import { Router } from "express";

import {
  getUsersAppointments,
  updateAppointment,
  addAppointment,
} from "./controller";

const router = Router();

router.get("/:id", getUsersAppointments);
router.patch("/:id", updateAppointment);
router.post("/", addAppointment);

export default router;
