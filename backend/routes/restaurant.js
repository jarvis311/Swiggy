const router = require('express').Router()
const restaurantController = require('../controller/restaurant')

router.get('/get-restaurants',restaurantController.findAlldata)
router.post('/add-restaurants',restaurantController.createData)
router.get('/get-restaurant/:id',restaurantController.findRestaurant)

module.exports = router