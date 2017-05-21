const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


const CoreSchema = new mongoose.Schema({
    id: {type: Number, unique: true},
    name: String,
    companyName: String,
    socket: String,
    price: Number
});

const Core = module.exports = mongoose.model('Core',CoreSchema);

module.exports.addCore = function (item) {
    let core = new Core(item);
    core.save();
};

module.exports.getCores = function (callback) {
    Core.find({} , function (err, doc) {
        let items = {};
        doc.forEach(function (item, i) {
            items[i] =   item;
        });
        console.log(items);
        callback;

    });
};

module.exports.getUserById = function(id, callback) {
  const query = {'id': id};
    User.findOne(query, callback);
};

diff = function (a1, a2) {
    return a1.filter(i=>a2.indexOf(i)<0)
    .concat(a2.filter(i=>a1.indexOf(i)<0));
};


