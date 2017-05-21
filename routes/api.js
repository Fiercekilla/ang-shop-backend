const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const CoreSchema = new mongoose.Schema({
    id: {type: Number, unique: true},
    productName: String,
    companyName: String,
    socket: String,
    price: Number,
    description: String,
    category: String,
    imageUrl: String
});

const Core = module.exports = mongoose.model('Core',CoreSchema);

router.post('/add/core', function (req,res) {
    let body = req.body;
    let core = new Core(body);
    core.save();
    console.log(body);
    res.json(body);
});

router.get('/cores', function (req,res) {
    Core.find({} , function (err, doc) {
        let items = [];
        doc.forEach(function (item) {
           items.push(item)
        });
        res.json(items);
    });
});

router.get('/product/:id', function (req,res) {
    const req_id = req.params.id;
    const query = {'id': req_id};
    Core.find(query , function (err, doc) {
        let items = [];
        doc.forEach(function (item) {
            items.push(item)
        });
        res.json(items);
    });
});


module.exports = router;
