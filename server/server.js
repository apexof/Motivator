const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer")();
const config = require("./db/config");
const DBconnect = require("./db/connect");

const app = express();

DBconnect();

app.use(multer.array());
app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("./routes/finances")(app);
require("./routes/operations")(app);

app.listen(config.PORT);
