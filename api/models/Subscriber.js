const { init } = require ("../dbConfig/init");
const { ObjectId } = require("mongodb");

class Subscriber {
    constructor(data){
        this.id = data.id;
        this.name = data.name; 
        this.email = data.email;
        this.isTester = data.isTester;
        this.created_on = data.created_on; 
    }

    static get all(){
        return new Promise(async (resolve, reject) => {
            try{
                const db = await init();
                let results = await db.collection("subscribers")
                    .find()
                    .toArray();
                const subs = results.map(
                    s => new Subscriber({ ...s, id: s._id })
                );
                subs.sort((x, y) => y.created_on - x.created_on);
                console.log(subs)
                resolve(subs); 
            }catch(err) {
                reject('ERROR: could not get the Subscriber record'); 
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
                
                let result = await db.query('INSERT INTO Subscribers(name, email, tester) VALUES($1) RETURNING *;', [...data]);
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