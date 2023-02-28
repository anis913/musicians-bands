const {Sequelize, sequelize} = require('./db');

let Musician = sequelize.define('musician', {
    name: sequelize.STRING,
    instrument: sequelize.STRING  
  });

module.exports = {
    Musician
};