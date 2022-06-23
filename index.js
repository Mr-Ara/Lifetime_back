require("express-async-errors");
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const debug = require("debug")("app:main");
const config = require("config");
const router = require("./src/routes/index");
const winston = require("winston");

require("./startup/config")(app, express);
require("./startup/db")();
require("./startup/logging")();

app.use("/api", router);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

