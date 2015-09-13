var express = require('express');
var crypto = require('crypto');
var router = express.Router();
var User = require('../dataModel/userModel');
var Profile = require('../dataModel/profileModel');

router.get('/userbasicinfo', function(req,res){
	console.log(req);
	var username = req.query.username;
	var out ={
		'Target Action':'userbasicinfo',
		'content':'',
		'firstname':'',
		'lastname':'',
		'imagestring':''
	};
	Profile.findOne({username:username},function(err,doc){
		if(err) out.content = 'fail';
		if(doc){
			out.content = 'success';
			out.firstname = doc.firstName;
			out.lastname = doc.lastName;
			if(doc.image) out.imagestring = doc.image;
			else out.imagestring = '';
		}else{
			out.content = 'fail';
		}
		res.send(out);
	});
});

router.post('/addusersmallimage', function(req,res){
	var username = req.body.username;
	var image = req.body.imagestring;
	var out = {
		'Target Action':'addusersmallimageresult',
		'content':''
	};
	Profile.update({username:username},{$set:{image:image}}, function(err){
		if (err) out.content = 'fail';
		else out.content = 'success';
		res.send(out);
	});
});


module.exports=router;