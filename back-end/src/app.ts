const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
import { Request, Response } from "express-serve-static-core";

//Import Routes
import usersRouter from "./resources/users/router";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Routs
app.use("/user", usersRouter);
app.all("*", (req: Request, res: Response) => {
  res.status(404).json("No route match");
});

module.exports = app;
