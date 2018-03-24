const express = require('express');
const router = express.Router();

const {
	getDistrics,
	addDistric,
	updateDistric,
	deleteDistric
} = require('../controllers/districs');

/**
 * @api {get} / Get list of  districs
 * @apiName GetRoot
 * @apiGroup Root
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.route('/')
	.get(getDistrics)
	.post(addDistric)

router.route('/:id')
	.put(updateDistric)
	.delete(deleteDistric)

module.exports = router;
