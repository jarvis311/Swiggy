const { DataTypes} = require("sequelize");
const sequelize = require("../config/sequelize");
const Product = require("./product");



    const Restaurant = sequelize.define("restaurant", {
        restaurant_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        restaurant_type: {
            type: DataTypes.STRING,
            allowNull: false
          },
        restaurant_decription: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          restaurant_latitude: {
            type: DataTypes.FLOAT,
            allowNull: false
          },
          restaurant_longitude: {
            type: DataTypes.FLOAT,
            allowNull: false
          }
          
     });
    
    // Restaurant.hasMany(Product, { foreignKey:'restaurantId'})
    sequelize.sync().then(() => {
        console.log('Book table created successfully!');
     }).catch((error) => {
        console.error('Unable to create table : ', error);
     });

 
 

 module.exports = Restaurant
//  module.exports = createDatabas