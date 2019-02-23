const mongoose = require("mongoose");

const { MONGODB_URI } = require("./config");

mongoose.connection.once("open", () => console.log("Connected to MongoDB"));

function connect() {
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
}

module.exports = connect;
