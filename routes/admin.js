var express = require('express');
var Admin = require('../dataModel/adminModel');
var router = express.Router();

/* GET admin page. */
router.get('/', function(req, res, next) {
	res.render('admin');
});
router.post('/',function(req,res){
	var user_name=req.body.user;
  	var password=req.body.password;
  	console.log("User name = "+user_name+", password is "+password);
  	Admin.find({user:user_name},function(err,user){
  		console.log(user[0]);
  		if(user[0].password==password){
  			res.render("index",{title:'Bocer'});
  		}else{
  			res.send('fail');
  		}
  	});
});

module.exports = router;