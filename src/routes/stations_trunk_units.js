const express = require('express');
const router = express.Router();

const {
	getStationsTrunkUnits,
	addStationsTrunkUnit,
	updateStationsTrunkUnit,
	deleteStationsTrunkUnit,
	getStationsTrunkUnit
} = require('../controllers/stations_trunk_units');

router.route('/')
	.get(getStationsTrunkUnits)
	.post(addStationsTrunkUnit)

router.route('/:id')
	.put(updateStationsTrunkUnit)
	.delete(deleteStationsTrunkUnit)

router.route('/:start/:name')
	.get(getStationsTrunkUnit)
	
module.exports = router;
