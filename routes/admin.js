var express = require('express');
var assert = require('assert');
var router = express.Router();

/* GET admin page. */
router.get('/', function(req, res, next) {
	res.render('admin');
});
router.post('/',function(req,res){
	var collection = req.db.get('admin');
	var user_name=req.body.user;
  	var password=req.body.password;
  	console.log("User name = "+user_name+", password is "+password);
  	collection.find({user:user_name},{},function(err,docs){
  		assert.equal(1,docs.length);
  		if(docs[0].password==password){
  			res.render("index",{title:'Bocer'});
  		}else{
  			res.send('fail');
  		}
  	});
});

module.exports = router;