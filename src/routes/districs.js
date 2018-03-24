const express = require('express');
const router = express.Router();

const {
	getDistrics,
	addDistric,
	updateDistric,
	deleteDistric
} = require('../controllers/districs');

router.route('/')
	.get(getDistrics)
	.post(addDistric)

router.route('/:id')
	.put(updateDistric)
	.delete(deleteDistric)

module.exports = router;
