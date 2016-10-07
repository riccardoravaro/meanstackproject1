var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");//require("mongodb").MongoClient;



var auth = require('./controllers/auth');
var message = require('./controllers/message');
var database;


app.use(bodyParser.json());

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
});

app.post('/api/message', message.post)
app.get('/api/message', message.get);



app.post('/auth/register', auth.register);

mongoose.connect("mongodb://localhost:27017/test", function(err,db){
	if(!err){
		console.log("connected");
		//db.collection('messages').insertOne({'msg':'test'});
		database = db;
		//GetMessage();


	} else {
		console.log('not connect');
	}
})

var server = app.listen(5000, function(){
	console.log('listening on port', server.address().port);
})
