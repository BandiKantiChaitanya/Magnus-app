// import mongoose
const mongoose=require('mongoose')

const schema=mongoose.Schema

const EmployeeSchema=schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    // skills:[]
    skills: {
        type: [String],
        default: [],
        required: false,
    }
},{timestamps:true})

const Employee=mongoose.model('Employee',EmployeeSchema)

module.exports=Employee

