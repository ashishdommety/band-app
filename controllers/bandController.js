//require the models
const db = require("../models/Bands");
//export an object with key/value pairs of all the mongoose queries inside
//call-back functions
module.exports = {
  findAll: function(req, res) {
    db
        .find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    db
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateBand: function(req, res) {
    db
      .findOneAndUpdate({
        _id: req.params.id
      }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db
      .findById({
        _id: req.params.id
      })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
