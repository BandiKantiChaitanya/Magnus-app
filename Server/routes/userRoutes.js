// mini express app
const express=require('express')
const { createUser, UserLogin, UpdateUser, deleteImage, UserImage } = require('../controllers/userController')
const requireAuth = require('../middleware/requireAuth')
const upload = require('../Utils/upload')
const userRouter=express.Router()

userRouter.post('/createUser',createUser)

userRouter.post('/login',UserLogin)

userRouter.put('/update',requireAuth,upload.array('image',10),UpdateUser)

userRouter.get('/images',requireAuth,UserImage)

userRouter.delete('/del',requireAuth,deleteImage)

module.exports=userRouter