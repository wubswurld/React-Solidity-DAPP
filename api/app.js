var express = require('express');
var path = require('path');
var cors = require("cors");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
var gatewayRouter = require('./routes/gateway');
var pylonRouter = require('./routes/pylon');
var app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/gateway', gatewayRouter);
app.use('/pylon', pylonRouter);

module.exports = app;
// module.exports.handler = serverless(app);