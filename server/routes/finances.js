const models = require("../models/financeModels").modelNames;
const db = require("../db/requests/finances");
const checkJwt = require("../jwt");
const { serverErrors } = require("../errorHandlers");

module.exports = function(app) {
  models.forEach((model) => {
    app.get(`/${model}`, checkJwt, (req, res) => {
      db[`list_${model}`]()
        .then(data => res.send(data))
        .catch(serverErrors);
    });

    app.post(`/${model}`, checkJwt, (req, res) => {
      db[`create_${model}`](req.body)
        .then(data => res.send(data))
        .catch(serverErrors);
    });

    app.put(`/${model}`, checkJwt, (req, res) => {
      db[`update_${model}`](req.body._id, req.body)
        .then(data => res.send(data))
        .catch(serverErrors);
    });

    app.delete(`/${model}/:_id`, checkJwt, ({ params: { _id } }, res) => {
      db[`delete_${model}`](_id)
        .then(data => res.send(data))
        .catch(serverErrors);
    });

    app.delete(`/disable_${model}/:_id`, checkJwt, (req, res) => {
      db[`disable_${model}`](req.params._id)
        .then(data => res.send(data))
        .catch(serverErrors);
    });
  });
};
