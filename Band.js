const {Sequelize, sequelize} = require('./db');

let Band = sequelize.define('band', {
  name: sequelize.STRING,
  genre: sequelize.STRING  
});

module.exports = {
    Band
};