const express = require('express');
const router = express.Router();
const Dog = require('./../Dog');

// INDEX
router.get('/', (req, res) => {
	Dog.find()
		.then((dogs) => {
			res.json({ status: 200, dogs: dogs });
		})
		.catch((err) => {
			console.log(err);
		});
});

// CREATE
router.post('/', (req, res) => {
	Dog.create(req.body).then((dog) => {
		res.json({ status: 201, dog: dog });
	});
});

// DELETE /:id
router.delete('/:id', (req, res) => {
	Dog.deleteOne({ _id: req.params.id }).then(() => res.status(204).json());
});

// PUT /:id
router.put('/:id', (req, res) => {
	Dog.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
		(dog) => res.status(200).json({ status: 200, dog: dog })
	);
});

module.exports = router;
