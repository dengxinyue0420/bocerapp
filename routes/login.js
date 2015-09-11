var express = require('express');
var crypto = require('crypto');
var router = express.Router();
var User = require('../dataModel/userModel');
var Profile = require('../dataModel/profileModel');

router.post('/addUser', function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;

	var salt = crypto.randomBytes(256).toString('base64');
	var hashed = crypto.pbkdf2Sync(password,salt,12000,128).toString('hex');

	var newUser = User({
		username:username,
		password:hashed,
		firstName:firstName,
		lastName:lastName,
		salt:salt
	});

	var newProfile = Profile({
		user_id: newUser._id,
		username:username,
		firstName:firstName,
		lastName:lastName
	});
	
	newUser.save(function(err){
		var out = {
		'Target Action':'signupresult',
		'content':''};
		if(err){
			if(err.code===11000){
				out.content='exist';
			}else{
				out.content='fail';
			}
		}
		else{
			out.content='success';
			newProfile.save(function(err){
				if(err) out.content = 'fail';
			});
		}
		res.send(out);
	});
});

router.post('/login', function(req, res){
	var username = req.body.username;
	var password = req.body.password;

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
			var salt = users[0].salt;
			var truePwd = users[0].password;
			var hashed = crypto.pbkdf2Sync(password,salt,12000,128).toString('hex');

			if (hashed===truePwd){out.content='success';}
			else{out.content='wrong';}
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

router.post('/forgetPassword', function(req,res){
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