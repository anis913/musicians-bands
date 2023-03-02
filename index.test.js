const { UPSERT } = require('sequelize/types/query-types');
const {sequelize} = require('./db');
const {Band, Musician, Song} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        const testBand = await Band.create({ name: 'eazy', genre: 'pop' });
        expect(testBand.name).toBe('eazy');
    })

    test('can create a Musician', async () => {
        const testMusician = await Musician.create({ name: 'mozart', instrument: 'guitar' });
        expect(testMusician.name).toBe('mozart');
    })

    test('can create a Song', async () => {
        const testSong = await Song.create({ title: 'murda', year: 2020 });
        expect(testMusician.title).toBe('murda');
    })

    test('Multiple musicians can be added to a Band', async () => {
        const foundBand = await Band.findAll();
        expect(foundBand.getMusicians().name).toBe('mozart');
    })

    test('Multiple Bands can be added to a Song', async () => {
        const foundBand2 = await Song.findAll();
        expect(foundBand2.getSongs().year).toBe(2020);
    })
})