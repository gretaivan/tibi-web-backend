// db init file, i.e. to establish the connection and then to allow our model to query DB

const { Pool } = require("pg");

let config;

if (process.env.DATABASE_URL) {
    config = {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    }
}

const pool = new Pool(config);

module.exports = pool;