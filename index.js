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

app.get('/', (req, res) => {
	res.json({
		status: 200,
		msg: 'Nothing to see here... try http://localhost:4000/dogs.',
	});
});

app.listen('4000', () => {
	console.log('Server running on port 4000');
});
