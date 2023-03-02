const { BelongsTo, HasMany } = require('sequelize');
const {Band} = require('./Band')
const {Musician} = require('./Musician')
const {Song} = require('./Song')


Musician.BelongsTo(Band);
Band.HasMany(Musician);

Song.belongsToMany(Band, {through: 'song_band'});
Band.belongsToMany(Song, {through: 'song_band'});

module.exports = {
    Band,
    Musician,
    Song
};
