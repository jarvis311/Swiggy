const sequelize = require("../config/sequelize");
const Product = require("../model/product");

exports.createData = (req, res) => {
  Product.create({
    product_name: "Product 3",
    product_price: "254",
    product_decription: "product decription 3",
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Failed to create a new record : ", error);
    });
};

exports.findAlldata = (req, res) => {
  const restaurantId = req.params.restaurantId;
  Product.findAll({ where: { restaurantId: restaurantId } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.findProduct = (req, res) => {
  const id = req.params.id;
  Product.findByPk(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
