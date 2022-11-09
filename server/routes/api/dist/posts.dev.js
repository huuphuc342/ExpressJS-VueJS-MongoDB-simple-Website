"use strict";

var express = require('express');

var mongodb = require('mongodb');

var router = express.Router(); //testing function
//get Post

router.get('/', function _callee(req, res) {
  var posts;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(loadPostsCollection());

        case 2:
          posts = _context.sent;
          _context.t0 = res;
          _context.next = 6;
          return regeneratorRuntime.awrap(posts.find({}).toArray());

        case 6:
          _context.t1 = _context.sent;

          _context.t0.send.call(_context.t0, _context.t1);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}); //add Post 

router.post('/', function _callee2(req, res) {
  var posts;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(loadPostsCollection());

        case 2:
          posts = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(posts.insertOne({
            text: req.body.text,
            text2: req.body.text2,
            createdAt: new Date()
          }));

        case 5:
          res.status(269).send();

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}); //Delete Post

router["delete"]('/:id', function _callee3(req, res) {
  var posts;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(loadPostsCollection());

        case 2:
          posts = _context3.sent;
          _context3.next = 5;
          return regeneratorRuntime.awrap(posts.deleteOne({
            _id: new mongodb.ObjectID(req.params.id)
          }));

        case 5:
          res.status(200).send();

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
});

function loadPostsCollection() {
  var client;
  return regeneratorRuntime.async(function loadPostsCollection$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(mongodb.MongoClient.connect('mongodb+srv://webapp123:webapp123@cluster0.6dtvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true
          }));

        case 2:
          client = _context4.sent;
          return _context4.abrupt("return", client.db('webapp123').collection('posts'));

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
}

module.exports = router;