// db init file, i.e. to establish the connection and then to allow our model to query DB

// const { Pool } = require("pg");

// let config;

// if (process.env.DATABASE_URL) {
//     config = {
//         connectionString: process.env.DATABASE_URL,
//         ssl: {
//             rejectUnauthorized: false
//         }
//     }
// }

// const pool = new Pool(config);

// module.exports = pool;

// const { Pool } = require("pg");
// const connectionString = process.env.DATABASE_URL
// const env = process.env.NODE_ENV;
// let options;

// if (env === "production") {
//   options = { connectionString, ssl: { rejectUnauthorized: false } }
// } else {
//   options = { connectionString }
// }

// const pool = new Pool(options);
// pool.connect();
// pool.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//     if (err) throw err;
//     for (let row of res.rows) {
//       console.log(JSON.stringify(row));
//     }
//     client.end();
//   });

// module.exports = pool;

const { MongoClient } = require("mongodb");
const connectionUrl = process.env.DB_URI;
const dbName = process.env.DB_NAME;

const init = async () => {
    try{
        let client = await MongoClient.connect(connectionUrl);
        console.log("connected to database!", dbName);
        return client.db(dbName);
    } catch (e) {
        console.log(e);
    }
    
};

module.exports = { init };