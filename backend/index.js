const express = require('express');
const db = require('./config');
const cors = require('cors');
const connectDb = require('./config');
const bodyParser = require('body-parser')
const app = express()

const productRoutes = require('./routes/product')
const restaurantRoutes = require('./routes/restaurant')
app.use(cors())
app.use(bodyParser.json())
app.use (bodyParser.urlencoded({extended:true}));
app.use('/product', productRoutes)
app.use('/restaurant', restaurantRoutes)


connectDb()
app.listen(5000, () => {
    console.log("Server is running port ")
})
