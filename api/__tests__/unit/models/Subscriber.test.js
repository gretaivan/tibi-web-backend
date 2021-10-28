const Subs = require('../../../models/Subscriber')
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
            const all = await Subs.all; 
            expect(all).toHaveLength(defaultDBlength);
        })
        it ('rejects with an error on unsuccessful db query', async () => {
            jest.spyOn(db, 'query').mockResolvedValueOnce(undefined)
            await Subs.all.catch(e => {
                expect(e).toMatch('ERROR')
            })
            spyOn.mockRestore();
        
        })
    })
})