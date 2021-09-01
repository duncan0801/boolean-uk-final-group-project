"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.get("/:id", controller_1.getUsersAppointments);
router.patch("/:id", controller_1.updateAppointment);
router.post("/", controller_1.addAppointment);
exports.default = router;
