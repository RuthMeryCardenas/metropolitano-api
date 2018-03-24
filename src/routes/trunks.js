const express = require('express');
const router = express.Router();

const {
	getProducts,
	addProduct,
	updateProduct,
	deleteProduct
} = require('../controllers/trunks');

router.route('/')
	.get(getProducts)
	.post(addProduct)

router.route('/:id')
	.put(updateProduct)
	.delete(deleteProduct)

module.exports = router;

