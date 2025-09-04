// import mongoose
const mongoose=require('mongoose')

const schema=mongoose.Schema

const userSchema=schema({
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type: [String], 
        default: []
    }
})

const Users=mongoose.model('Users',userSchema)

module.exports=Users