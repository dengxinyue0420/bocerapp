var express = require('express');
var router = express.Router();


router.get('/addUser', function(req, res, next){
	console.log('receive add user get request');
	console.log(req.body);
	res.send('receive add user request');
});

router.post('/addUser', function(req, res, next){
	console.log('receive add user request');
	console.log(req);
	res.send('success');
});

router.get('/login', function(req, res, next){
	console.log('receive login get request');
	console.log(req);
	res.send('receive add user request');
});

router.post('/login', function(req, res, next){
	console.log('receive login request');
	console.log(req);
	res.send('receive add user request');
});

module.exports = router;