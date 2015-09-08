var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username:{type:String, require:true, unique:true},
	firstName:{type:String, require:true},
	lastName:{type:String, require:true},
	password:{type:String, require:true},
	//salt:{type:String,require:true},
	creatDate: Date,
	is_deleted: Boolean},
	{
		collection:'users'
	});

userSchema.pre('save',function(next){
	var date = new Date();
	this.creatDate = date;
	this.is_deleted = false;

	next();
});


var User = mongoose.model('User',userSchema);

module.exports=User;