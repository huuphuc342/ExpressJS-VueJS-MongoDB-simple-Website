"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var app = express(); ///new input
///new middlewares
//middle wares////////////////////////////////

app.use(bodyParser.json());
app.use(cors());

var posts = require('./routes/api/posts');

app.use('/api/posts', posts);
var port = process.env.PORT || 3000;
app.listen(port, function () {
  return console.log("Server started on port ".concat(port));
});