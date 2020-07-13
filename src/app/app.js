const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

app.use(morgan("common"));
app.use(express.static("public"))
app.use(cors());
app.use(express.json());
app.use(helmet());

module.exports = app;