var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var os = require('os');
var assert = require('assert');

var config = {
  "USER"    : "",           
  "PASS"    : "",
  "HOST"    : "localhost",//"ec2-52-88-172-28.us-west-2.compute.amazonaws.com",  
  "PORT"    : "27017", 
  "DATABASE" : "bocerapp"
}
var dbpath = "mongodb://"+config.USER + ":"+
            config.PASS + "@"+
            config.HOST + ":"+
            config.PORT + "/"+
            config.DATABASE;

var db = mongoose.connect(dbpath);

var routes = require('./routes/index');
var admin = require('./routes/admin');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//make db accessible
app.use(function(req,res,next){
  req.db = db;
  next();
})

//functions for randering page and handle request
app.use('/', routes);
app.use('/admin',admin);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
