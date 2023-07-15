const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req,res,next)=>{

    //verify authentication
    const{authorization } = req.headers

    if(!authorization){
        return res.status(401).json({error: "Authorization token required"})
    }

    //Bearer adsfasfd34asd.235fgv534346.23q46rgasaf
    //we need to split the token to get the token only not the Bearer part also
    const token = authorization.split(' ')[1]

    try{
        const{_id}=jwt.verify(token,process.env.JWT_SECRET)
        
        req.user = await User.findOne({_id}).select('_id')

        next()
    }catch(error){
        console.log(error)
        res.status(401).json({error:"Request is not authorized"})

    }
}

module.exports = requireAuth