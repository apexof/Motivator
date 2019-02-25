const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const multer = require("multer")();
const fallback = require("express-history-api-fallback");
const config = require("./db/config");
const DBconnect = require("./db/connect");

const app = express();

DBconnect();

app.use(helmet());
app.use(morgan("combined"));
app.use(multer.array());
app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/callback", fallback("index.html", { root: "dist" }));

require("./routes/finances")(app);
require("./routes/operations")(app);

app.listen(config.PORT, console.log(config.PORT));
