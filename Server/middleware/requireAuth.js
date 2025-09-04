const jwt=require('jsonwebtoken')
require('dotenv').config();
const SECRET_KEY=process.env.SECRET_KEY

const requireAuth=(req,res,next)=>{
    const authHeader=req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(401).json({message:'Login first'})
    }
    const token =authHeader.split(' ')[1]

    try {
        const decoded=jwt.verify(token,SECRET_KEY)
        // console.log(decoded)
        req.userId = decoded.id || decoded._id || decoded.userId;
    next()
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token' });
    }
}
module.exports=requireAuth