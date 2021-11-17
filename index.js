const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dogsController = require('./controllers/dogs');
const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/dogs', dogsController);

app.listen('4000', () => {
	console.log('Server running on port 4000');
});
