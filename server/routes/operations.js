const db = require("../db/requests/operations");
const { serverErrors } = require("../errorHandlers");
const checkJwt = require("../jwt");

module.exports = function(app) {
  app.get("/operations", checkJwt, (req, res) => {
    db.get_all_operations()
      .then(data => res.send(data))
      .catch(serverErrors);
  });

  app.post("/operations", checkJwt, (req, res) => {
    db.add_operation(req.body)
      .then(data => res.send(data))
      .catch(serverErrors);
  });

  app.delete("/operations/:_id", checkJwt, ({ params: { _id } }, res) => {
    db.delete_operation(_id)
      .then(newItems => res.send({ _id, newItems }))
      .catch(serverErrors);
  });

  // app.put("/operations", (req, res) => {
  //   db.update_operations(req.body)
  //     .then(data => res.send(data))
  //     .catch(serverErrors);
  // });
};
