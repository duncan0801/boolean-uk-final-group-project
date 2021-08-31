const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
import { Request, Response } from "express-serve-static-core";

//Import Routes
import usersRouter from "./resources/users/router";
import counsellorRouter from "./resources/counsellors/router";
import messagesRouter from "./resources/messages/router";
import faqRouter from "./resources/faq/router";
import servicesRouter from "./resources/services/router";
import reviewsRouter from "./resources/reviews/router";
import appointmentsRouter from "./resources/appointments/router";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Routs
app.use("/user", usersRouter);
app.use("/counsellors", counsellorRouter);
app.use("/messages", messagesRouter);
app.use("/faq", faqRouter);
app.use("/services", servicesRouter);
app.use("/appointments", appointmentsRouter);
app.use("/reviews", reviewsRouter);

app.all("*", (req: Request, res: Response) => {
  res.status(404).json("No route match");
});

module.exports = app;
