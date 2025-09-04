// import express,multer
const multer=require('multer')
const { storage } = require('./Cloudinary')


const upload=multer({
    storage:storage,
    limits:{
        fileSize:10*1024*1024
    }
})

module.exports=upload
