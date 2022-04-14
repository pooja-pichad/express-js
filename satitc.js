// var express = require('express');
// var app = express();

// app.use(express.static('public'));
// app.use(express.static('images'));

// app.listen(3000);

var express = require('express');
var app = express();

app.use('/static', express.static('public'));

app.listen(3000);