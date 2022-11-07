const dbConfig = require("./db-config");
const sequelize = require('./sequelize')

const connectDb = () => {
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
     }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
     });
}

module.exports = connectDb