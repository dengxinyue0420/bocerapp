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
			out.content='success';
		}
		res.send(out);
	});
});

router.post('/login', function(req, res){
	var username = req.body.username;
	var password = req.body.username;

	var out = {
		'Target Action':'loginresult',
		'content':''
	};
	User.find({username:username},function(err,users){
		if(err)
			out.content='fail';
		else if(users.length===0){
			out.content='wrong';
		}else{
			out.content='success';
		}
		res.send(out);
	})
});

router.post('/checkFacebook', function(req,res){
	var username = req.body.username;

	var out = {
		'Target Action':'facebookresult',
		'content':''
	};
	User.find({username:username},function(err,data){
		if(err){
			out.content = 'fail';
		}else if(data.length===0){
			out.content = 'not exist';
		}else{
			out.content='success';
		}
		res.send(out);
	});
});

router.post('forgetPassword', function(req,res){
	var username = req.body.username;
	var out = {
		'Target Action':'forgetresult',
		'content':''
	}
	User.find({username:username},function(err,data){
		if(err){
			out.content = 'fail';
		}else if(data.length===0){
			out.content = 'not exist';
		}else{
			out.content='success';
			console.log('send email to user');
		}
		res.send(out);
	})
});

module.exports = router;