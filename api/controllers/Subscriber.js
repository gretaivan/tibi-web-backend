const express = require('express');
const Subscriber = require('../models/Subscriber');
const router = express.Router();

// const bcrypt = require('bcrypt'); 

async function create(req, res) {
    try{
        console.log("New Subscriber creation");
        // const salt = await bcrypt.genSalt();
        // const hashed = await bcrypt.hash(req.body.email, salt);
        const sub = await Subscriber.create({...req.body}); // use att.hashed if encryption wanted
        res.status(201).json({
            msg: 'Thank you, your interest has been registered!'
        });
    } catch(err){
        res.status(500).json({err}); 
    }
}

///do not forget to remove this f-tion for productions

 async function all (req, res) {
    try{
        console.log("Fetching email list");
        const subs = await Subscriber.all; 
        console.log(subs)
        res.status(200).json({email: subs.email, created_on: subs.created_on})
    } catch(err){
        res.status(500).json({err});
    }
}

module.exports = {create, all}