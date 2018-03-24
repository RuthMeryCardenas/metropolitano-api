const express = require('express');
const router = express.Router();

const {
	getTrunk_units,
	addTrunk_unit,
	updateTrunk_unit,
	deleteTrunk_unit
} = require('../controllers/trunk_units');

router.route('/')
	.get(getTrunk_units)
	.post(addTrunk_unit)

router.route('/:id')
	.put(updateTrunk_unit)
	.delete(deleteTrunk_unit)

module.exports = router;
