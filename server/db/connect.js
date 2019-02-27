const mongoose = require("mongoose");

mongoose.connection.once("open", () => console.log("Connected to MongoDB"));

function connect(userName) {
  const dbName = userName.replace(/(@|\.)/g, "-");
  const MONGODB_URI = `mongodb+srv://apexof:Florida_6@take-my-money-qnhtm.mongodb.net/${dbName}?retryWrites=true`;
  return mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
}

module.exports = connect;
