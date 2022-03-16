const express = require('express');
const Subscriber = require('../models/Subscriber');
const router = express.Router();
const Security = require('../utils/protect');
// const bcrypt = require('bcrypt'); 

async function create(req, res) {
    try{      
       
        const sub = await Subscriber.create({...req.body});
        res.status(201).json({
            msg: `Thank you ${sub.name}, your interest has been registered!`
        });
    } catch(err){
        res.status(500).json({err}); 
    }
}

///do not forget to remove this f-tion for productions

 async function index (req, res) {
    try{
        const subscribers = await Subscriber.all; 
        res.status(200).json(subscribers);
    } catch(err){
        res.status(500).json({err});
    }
}

module.exports = { create, index }