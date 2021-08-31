"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
//Import Routes
const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
//Routs
app.all("*", (req, res) => {
    res.status(404).json("No route match");
});
module.exports = app;
