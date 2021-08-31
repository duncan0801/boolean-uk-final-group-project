const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
import { Request, Response } from "express-serve-static-core";

//Import Routes

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());

//Routs
app.all("*", (req: Request, res: Response) => {
  res.status(404).json("No route match");
});

module.exports = app;
