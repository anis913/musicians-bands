const {Sequelize, sequelize} = require('./db');

let Song = sequelize.define('song', {
    title: sequelize.STRING,
    year: sequelize.INTEGER  
  });

module.exports = {
    Song
};