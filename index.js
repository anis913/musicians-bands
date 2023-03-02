const { BelongsTo, HasMany } = require('sequelize');
const {Band} = require('./Band')
const {Musician} = require('./Musician')

Musician.BelongsTo(Band);
Band.HasMany(Musician);

module.exports = {
    Band,
    Musician
};
