// const express = require('express');
// const Userv = require('../models/Creden')
// const app = express.Router();



// //create a user using: POST '/api/auth
// // app.post('/', (req, res) => {
// //     console.log(req.body)
// //     // res.send('This is authentication response!');
// //     const user = Userv(req.body)
// //     user.save()
// //     res.send(req.body)
// // })


// //VALIDATION'S
// const { body, validationResult } = require('express-validator');
// app.post('/',[
//     body('name','Enter a Valid Name').isLength({min:4}),
//     body('email','Enter a Valid Email').isEmail(),
//     body('password','Enter a Valid Password').isLength({min:6})
// ], (req, res) => {
//  const errors = validationResult(req);
//  if(!errors.isEmpty()){
//     return res.status(400).json({errors:errors.array()});
//  }
//  Userv.create({
//     name:req.body.name,
//     password:req.body.password,
//       email:req.body.email
//  }).then(user => res.json(user))
//  .catch(err =>{console.log(err)
//    res.json({error:'pls enter a unique value', message:err.message})
//  })
//     // res.send(req.body)
// })

// module.exports = app


const express = require('express');
const Userv = require('../models/Creden');
const app = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');

   


const JWT_SECPASS = 'AvinashkiRAJH'
//VALIDATION'S
const { body, validationResult } = require('express-validator');


//PATH1:  create a user (REGISTRATION): POST '/api/creden/createuser".  LOGIN NOT REQUIRED
app.post('/createuser', [
   body('name', 'Enter a Valid Name').isLength({ min: 4 }),
   body('email', 'Enter a Valid Email').isEmail(),
   body('password', 'Enter a Valid Password').isLength({ min: 6 })
], async (req, res) => {

   //if there are err return bad req
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }

   try {
      // check whether user is unique in all aspects
      let user = await Userv.findOne({ email: req.body.email })
      if (user) {
         return res.status(400).json({ error: "sorry enter valid info" });
      }
      const salt = await bcrypt.genSalt(6);    //creating a salt
      const secPass = await bcrypt.hash(req.body.password, salt)    // hashing our pass 
      //   user = await Uservd.create({  ------------------mistaken line we get 500 error {Uservd}
      user = await Userv.create({
         name: req.body.name,
         password: secPass,
         email: req.body.email
      })
      const data = {
         user: {
            id: user.id
         }
      }
      const jwtData = jwt.sign(data, JWT_SECPASS)
      console.log(jwtData)

      res.json({ jwtData })
      // res.json({user})   
      // res.send(req.body) 
      // res.json({"Verfication":"okay"})

   } catch (error) {
      console.log(error.message)
      return res.status(500).json({ error: "Some error occured" });

   }
})










//PATH2:   create a user (LOGIN): POST '/api/creden/login". LOGIN REQUIRED
app.post('/login', [
   body('email', 'Enter a Valid Email').isEmail(),
   body('password', 'Pass*** cant be B____lank').isLength({ min: 6 })
], async (req, res) => {

   //if there are err return bad req
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }
   //destructuring our mail and pass
   const { email, password } = req.body
   try {
      let user =await Userv.findOne({ email });
      if (!user) {
         return res.status(400).json({ error: "sorry enter valid info" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
         return res.status(400).json({ error: "sorry enter valid info" });
      }

      const data = {
         user: {
            id: user.id
         }
      }
      const jwtData = jwt.sign(data, JWT_SECPASS)
      console.log(jwtData)

      res.json({ jwtData })


   } catch (error) {
      console.log(error.message)
      return res.status(500).json({ error: "Some error occured" });
   }

})


//PATH3:  Get user details by authtoken usage: POST '/api/creden/getUser".  LOGIN REQUIRED

app.post('/getUser', fetchUser, async (req, res) => {


   try {
      userId = req.user.id
      const user = await Userv.findById(userId).select("-password")
      res.send(user)
   } catch (error) {
      console.error(error.message)
      return res.status(500).json({ error: "Internal error occured" });
   }

})


module.exports = app