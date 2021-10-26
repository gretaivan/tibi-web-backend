const Subs = require('../../../models/Subscriber')
const pg = require('pg')
jest.mock('pg')
const db = require('../../../dbConfig/init')

let subsData = {email: 'test2@test.com'}

describe('Running tests for Subscriber model: ', () => {
    beforeEach(() => jest.clearAllMocks());

    beforeEach(async () => {
        await resetTestDB()
    })

    afterAll(() => resetAllMocks)
})