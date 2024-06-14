const jwt = require('jsonwebtoken')
const JWT_SECPASS= 'AvinashkiRAJH'


fetchUser = (req,res,next)=>{
//get the user from jwt token and add id to req
const  token =req.header('jwtData')
if(!token){
    res.status(401).send({error:"pls authenticate using a valid token"})
}
try{
    const data = jwt.verify(token, JWT_SECPASS)
    req.user = data.user
    next()
  
}catch(error){
    res.status(401).send({error:"pls authenticate using a valid token"})

}

}


module.exports = fetchUser
