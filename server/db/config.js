const NODE_ENV = process.env.NODE_ENV || "development";
const IS_DEV = NODE_ENV === "development";
const PORT = NODE_ENV === "development" ? 8081 : process.env.PORT;
const MONGODB_URI = "mongodb+srv://apexof:Florida_6@take-my-money-qnhtm.mongodb.net/qwerty?retryWrites=true";

module.exports = {
  PORT,
  MONGODB_URI,
  IS_DEV
};
