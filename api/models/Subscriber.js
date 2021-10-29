const db = require('../dbConfig/init');

class Subscriber {
    constructor(data){
        this.email = data.email;
        this.created_on = data.created_on; 
    }

    //TODO: get all
    static all(data){
        return new Promise(async(res, rej) => {
            try{
                let result = await db.query('SELECT * FROM Subscribers;')
                const subs = result.rows.map(sub => new Subscriber(sub));
                res(subs); 
            }catch(err) {
                rej('ERROR: could not get the Subscriber record'); 
            }
        });
    }

    //TODO: create
    static create(data){
        return new Promise(async (res, rej) => {
            try{
                //check if an email already exist, if does throw an error
                let exists = await db.query('SELECT * Subscribers WHERE email=($1);',[data.email]);
                
                if(exists.rows.length > 0) {
                    throw Error('You are already registered your interest with us');
                }
                
                let result = await db.query('INSERT INTO Subscribers(email) VALUES($1) RETURNING *;', [data.email]);
                let subs = new Subscriber(result.rows[0]);
                res(subs); 
            } catch(err){
                rej('Something went wrong, please check you email address');
            }
        });
    }
    //TODO: find by pk 
    //TODO: find by IP
}

module.exports = Subscriber; 