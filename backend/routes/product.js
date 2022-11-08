const router = require('express').Router()
const productController = require('../controller/product')

router.get('/get-product/:restaurantId', productController.findAlldata)
router.post('/add-product', productController.createData)
router.get('/find-product/:id', productController.findProduct)

module.exports = router