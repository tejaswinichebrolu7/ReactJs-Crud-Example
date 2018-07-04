var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Hackathon = require('../models/Hackathon.js');

/* GET ALL HackathonS */
router.get('/', function(req, res, next) {
  Hackathon.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Hackathon BY ID */
router.get('/:id', function(req, res, next) {
  Hackathon.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Hackathon */
router.post('/', function(req, res, next) {
  Hackathon.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Hackathon */
router.put('/:id', function(req, res, next) {
  Hackathon.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Hackathon */
router.delete('/:id', function(req, res, next) {
  Hackathon.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
