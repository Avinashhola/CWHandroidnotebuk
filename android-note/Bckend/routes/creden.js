const express = require('express');
const Userv = require('../models/Creden')
const app = express.Router();



//create a user using: POST '/api/auth
// app.post('/', (req, res) => {
//     console.log(req.body)
//     // res.send('This is authentication response!');
//     const user = Userv(req.body)
//     user.save()
//     res.send(req.body)
// })


//VALIDATION'S
const { body, validationResult } = require('express-validator');
app.post('/',[
    body('name','Enter a Valid Name').isLength({min:4}),
    body('email','Enter a Valid Email').isEmail(),
    body('password','Enter a Valid Password').isLength({min:6})
], (req, res) => {
 const errors = validationResult(req);
 if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
 }
 Userv.create({
    name:req.body.name,
    password:req.body.password,
      email:req.body.email
 }).then(user => res.json(user));
    // res.send(req.body)
})

module.exports = app