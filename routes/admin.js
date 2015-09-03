var express = require('express');
var router = express.Router();

/* GET admin page. */
router.get('/', function(req, res, next) {
	res.render('admin');
});
router.post('/',function(req,res){
	var user_name=req.body.user;
  	var password=req.body.password;
  	console.log("User name = "+user_name+", password is "+password);
  	res.end("yes");
});

module.exports = router;