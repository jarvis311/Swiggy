const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Restaurant = require("./restaurant");

const Product = sequelize.define("data", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product_decription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  restaurantId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Product.belongsTo(Restaurant, { foreignKey:'restaurantId'})


// sequelize
//   .sync()
//   .then(() => {
//     console.log("Book table created successfully!");
//   })
//   .catch((error) => {
//     console.error("Unable to create table : ", error);
//   });

module.exports = Product;
