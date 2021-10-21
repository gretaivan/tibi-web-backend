// instucts the database upon connection to read the dev data seed file. Just for dev purposes

const db = require('./init');
const fs = require('fs');

const seeds = fs.readFileSync(__dirname + '/dev_seeds.sql').toString();

db.query(seeds, () => console.log('User development database seeded'));