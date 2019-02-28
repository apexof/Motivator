const mongoose = require("mongoose");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const { domain, clientID } = require("./db/config");

const checkJwt = (req, res, next) => {
  if (
    req.method === "GET"
    && ((mongoose.connection.readyState === 1 && mongoose.connection.db.s.databaseName === "demo") // подключены к базе демо
      || (req.params.userName && req.params.userName === "demo")) // пробуем подкл. к базе demo
  ) return next();

  return jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${domain}/.well-known/jwks.json`
    }),

    audience: clientID,
    issuer: `https://${domain}/`,
    algorithms: ["RS256"]
  })(req, res, next);
};

module.exports = checkJwt;
