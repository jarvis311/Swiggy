const router = require('express').Router()
const restaurantController = require('../controller/restaurant')

router.get('/get-restaurants',restaurantController.findAlldata)
router.post('/add-restaurants',restaurantController.createData)

module.exports = router