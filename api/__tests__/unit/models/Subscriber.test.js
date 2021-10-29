const Subscriber = require('../../../models/Subscriber')
const pg = require('pg')
jest.mock('pg')
const db = require('../../../dbConfig/init')

let subsData = {email: 'test2@test.com'}

describe('SUBSCRIBER MODEL', () => {
    beforeEach(() => jest.clearAllMocks());

    beforeEach(async () => {
        await resetTestDB()
    })

    // afterAll(() => resetAllMocks());

    describe('get all', () => {
        it('resolves with the array of subscribers', async () => {
            const all = await Subscriber.all; 
            expect(all).toHaveLength(defaultDBLength);
        })
        it ('rejects with an error on unsuccessful db query', async () => {
            try {
              await Subscriber.all;
            } catch (e) {
              expect(e).toMatch('error');
            }
        })
    })
})