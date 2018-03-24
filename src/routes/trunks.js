const express = require('express');
const router = express.Router();

const {
	getTrunks,
	addTrunk,
	updateTrunk,
	deleteTrunk
} = require('../controllers/trunks');

router.route('/')
	.get(getTrunks)
	.post(addTrunk)

router.route('/:id')
	.put(updateTrunk)
	.delete(deleteTrunk)

module.exports = router;

