const express = require('express');
const router = express.Router();
const Dog = require('./../Dog');

router.get('/', (req, res) => {
	Dog.find()
		.then((dogs) => {
			res.json({ status: 200, dogs: dogs });
		})
		.catch((err) => {
			console.log(err);
		});
});

router.post('/', (req, res) => {
	Dog.create(req.body).then((dog) => {
		res.json({ status: 201, dog: dog });
	});
});

module.exports = router;
