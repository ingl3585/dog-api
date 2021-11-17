const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/dog-api');

module.exports = mongoose;
