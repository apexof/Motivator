const NODE_ENV = process.env.NODE_ENV || "development";
const PORT = NODE_ENV === "development" ? 3000 : process.env.PORT;

const DEV_URI = "mongodb://localhost:27017/costAccounting";
const PROD_URI = process.env.MONGODB_URI;

const MONGODB_URI = NODE_ENV === "development" ? DEV_URI : PROD_URI;

module.exports = { PORT, MONGODB_URI };
