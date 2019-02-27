const NODE_ENV = process.env.NODE_ENV || "development";
const IS_DEV = NODE_ENV === "development";
const PORT = NODE_ENV === "development" ? 8080 : process.env.PORT;
const site = IS_DEV ? "http://localhost:8080" : "https://take-my-money.herokuapp.com";
const clientID = "MfWXuUWdMvJDyMDTNIHQkslK6u8mTdXu";
const domain = "dev-532l1po4.eu.auth0.com";

module.exports = {
  PORT,
  IS_DEV,
  site,
  domain,
  clientID
};
