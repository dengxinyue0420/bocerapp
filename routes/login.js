var express = require('express');
var router = express.Router();
var User = require('../dataModel/userModel');

router.post('/addUser', function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;

	//hash password here 

	var newUser = User({
		username:username,
		password:password,
		firstName:firstName,
		lastName:lastName
	});
	
	newUser.save(function(err){
		var out = {
		'Target Action':'signupresult',
		'content':''};
		if(err){
			console.log(err);
			if(err.code===11000){
				out.content='exist';
			}else{
				out.content='fail';
			}
		}
		else{
			out.content='suceess';
		}
		res.send(out);
	});
});

router.post('/login', function(req, res, next){
	var username = req.body.username;
	var password = req.body.username;

	var out = {
		'Target Action':'loginresult',
		'content':''
	}
	User.find({username:username},{},function(err,users){
		if(err)
			out.content='fail';
		else if(users.length===0){
			out.content='wrong';
		}else{
			out.content='success';
		}
	})
});

module.exports = router;