var Message = require('../models/message');

module.exports = {
	get:function (req, res)
	{
		Message.find({}).exec(function(err, result){
			console.log(result);
			res.send(result);
		})
	},
	post:function(req,res) {
		console.log(req.body);
		//database.collection('messages').insertOne(req.body);
		var message = new Message(req.body);
		message.save();
		res.status(200);
  }
}