const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async() => {
	try {
		await mongoose.connect(
			db,
			{
				useNewUrlParser: true
			}
		);

		console.log('Mongodb is Connnected')
	}
	catch (err){
		console.log(err.message);
		process.exit();
	}
}

module.exports = connectDB;