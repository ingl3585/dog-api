const mongoose = require('./connection');

const DogSchema = new mongoose.Schema({
	name: String,
	breed: String,
});

const Dog = mongoose.model('Dog', DogSchema);
module.exports = Dog;
