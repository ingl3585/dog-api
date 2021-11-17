const express = require('express');
const router = express.Router();
const Dog = require('./../Dog');

router.get('/', (req, res) => {
	Dog.find().then((dogs) => {
		res.status(200).json({ status: 200, dogs: dogs });
	});
});

module.exports = router;
