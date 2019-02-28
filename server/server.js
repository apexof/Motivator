const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const multer = require("multer")();
const fallback = require("express-history-api-fallback");
const { PORT } = require("./db/config");

const app = express();

app.use(helmet());
app.use(multer.array());
app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/callback", fallback("index.html", { root: "dist" }));
app.use("/app", fallback("index.html", { root: "dist" }));
app.use("/demo", fallback("index.html", { root: "dist" }));

require("./routes/common")(app);
require("./routes/finances")(app);
require("./routes/operations")(app);

app.listen(PORT, console.log(PORT));
