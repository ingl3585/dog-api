const express = require('express');
const router = express.Router();
const Dog = require('./../Dog');

router.get('/', (req, res) => {
	Dog.find().then((dogs) => {
		res.status(200).json({ status: 200, dogs: dogs });
	});
});

router.post('/', (req, res) => {
	Dog.create(req.body).then((dog) => {
		res.status(201).json({ status: 201, dog: dog });
	});
});

module.exports = router;
