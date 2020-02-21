const express = require('express');
const route = express.Router();
const objectId=require('mongoose').Types.ObjectId;

let users= require ('../models/user');

route.get('/', (req, res) => {
    users.find((err, docs) =>{
        if(!err) res.send(docs);
        else console.log(`erreur : ${err}`);
    });
});

route.get('/:id', (req,res) => {
    if(!objectId.isValid(req.params.id)){
        return res.status(404).send(`id inexisatnt ${req.params.id}`);
    }

    users.findById(req.params.id, (err, doc) => {
        if(!err) res.send(doc);
        else console.log(err);
    });
});