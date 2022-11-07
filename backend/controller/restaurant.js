const sequelize = require("../config/sequelize");
const Restaurant = require("../model/restaurant");
const Post = require('../model/product')
 exports.createData = (req, res) => {
    Restaurant.create({
        restaurant_name: "restaurant 1",
        restaurant_type: "Fast food",
        restaurant_decription: "restaurant decription 1",
    }).then(data => {
        res.status(200).json(data)
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });
}

exports.findAlldata = (req, res) => {
    Restaurant.findAll().then(data => {
    res.send(data);
    }) .catch (err => {
    res.status(500).send(err);
    });
    };
