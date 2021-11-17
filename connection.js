const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dog-api');

module.exports = mongoose;
