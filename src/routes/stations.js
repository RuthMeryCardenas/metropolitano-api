const express = require('express');
const router = express.Router();

const {
	getStations,
	addStation,
	updateStation,
	deleteStation
} = require('../controllers/stations');

router.route('/')
	.get(getStations)
	.post(addStation)

router.route('/:id')
	.put(updateStation)
	.delete(deleteStation)

module.exports = router;
