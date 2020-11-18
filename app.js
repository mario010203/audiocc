require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const hbs = require("hbs");
const logger = require("morgan");
const path = require("path");

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

// default value for title local
app.locals.title = "Audio-CC Test";

const index = require("./routes/index");
app.use("/", index);

module.exports = app;
