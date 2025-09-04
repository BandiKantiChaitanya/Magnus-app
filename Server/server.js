// import express
const express=require('express')
const dotenv=require('dotenv')
const mongoose = require('mongoose')
const empRouter = require('./routes/employeeRoutes')
const cors=require('cors')
const userRouter = require('./routes/userRoutes')
const requireAuth = require('./middleware/requireAuth')

// initialize app
const app=express()
dotenv.config()

const allowedOrigins = [
  'https://magnus-app-bandikantichaitanyas-projects.vercel.app/',
  'https://magnus-app-eight.vercel.app/',
  'http://localhost:5173',
  'http://localhost:5174'
];

// middleware 
app.use(cors({
    origin:  function(origin, callback){
    if(!origin) return callback(null, true); // allow REST clients like Postman
    if(allowedOrigins.includes(origin)){
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'), false);
    }
  },
    credentials: true 
}))
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('Connected to MongoDB')
})
.catch((error)=>{
    console.log('Error Occured')
})
 
app.use('/api',empRouter)
app.use('/api',userRouter)


// connect to a port
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log('Server is listening on port 5000')
})

