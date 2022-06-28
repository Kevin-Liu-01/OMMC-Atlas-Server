
const { MongoClient } = require("mongodb");
const Db = "mongodb+srv://mern:mongodb@cluster0.prjff.mongodb.net/Tutorial?retryWrites=true&w=majority";
const client = new MongoClient(Db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const option = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};

mongoose.connect('mongodb+srv://mern:mongodb@cluster0.prjff.mongodb.net/Tutorial?retryWrites=true&w=majority', option)
	.then(() => {
		console.log('Mongoose init succeeded')
	}).catch((err) => {
		console.log('Mongoose init error: ' + err);
	})

