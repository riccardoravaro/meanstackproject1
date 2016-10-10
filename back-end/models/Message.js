var mongoose = require("mongoose");//require("mongodb").MongoClient;

module.exports = mongoose.model('Message', {
	msg: String,
	user: {type:mongoose.Schema.ObjectId, ref: 'User'}
})
