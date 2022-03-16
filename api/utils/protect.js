//const bcrypt = require('bcrypt');
const crypto = require ("crypto");

const initVector = crypto.randomBytes(16);
const secret = crypto.randomBytes(32);
const algorithm = 'aes-256-cbc'

async function hashObject(obj){
  const salt = await bcrypt.genSalt();
  console.log('hashing ' + Object.entries(obj))
  let hashed = {};

  for(let [key, val] of Object.entries(obj)) {
    if (typeof val === "string" || typeof val === "number"){
      console.log(`${key}`)
      console.log(hashed[key])
      hashed[key] = await bcrypt.hash(val, salt);  
      
    }
  }
  return Object.assign(obj, hashed);
}

function encryptField(data) {

  const cipher = crypto.createCipheriv(algorithm, secret, initVector);
  let encryptedData = cipher.update(data, "utf-8", "hex");
  encryptedData += cipher.final("hex");
 
  return encryptedData;
}

function decryptField(encryptedData) {

  const decipher = crypto.createDecipheriv(algorithm, secret, initVector);
  let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
  decryptedData += decipher.final("utf8");

  return decryptedData;
}



function varHash (x) {
  const salt = bcrypt.genSalt();

  
  const hashed = bcrypt.hash(x, salt);

  

  return hashed; 
}


module.exports = { encryptField, decryptField }