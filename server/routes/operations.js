const db = require("../db/requests/operations");
const { serverErrors } = require("../errorHandlers");

module.exports = function(app) {
  app.get("/operations", (req, res) => {
    db.get_all_operations()
      .then(data => res.send(data))
      .catch(serverErrors);
  });

  app.post("/operations", (req, res) => {
    db.add_operation(req.body)
      .then(data => res.send(data))
      .catch(serverErrors);
  });

  app.delete("/operations/:_id", ({ params: { _id } }, res) => {
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
