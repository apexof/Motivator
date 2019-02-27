const { serverErrors } = require("../errorHandlers");
const DBconnect = require("../db/connect");
const checkJwt = require("../jwt");

module.exports = function(app) {
  app.get("/choose-db/:userName", checkJwt, (req, res) => {
    DBconnect(req.params.userName)
      .then((data) => {
        const dbName = data.connections[0].db.s.databaseName;
        console.log(dbName);
        res.send(dbName);
      })
      .catch(serverErrors);
  });
};
