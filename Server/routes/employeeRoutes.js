// mini express app
const express=require('express')
const { createEmp, allEmps, editEmp, delEmp, getEmp, getEmpSearch } = require('../controllers/employeeController')
const requireAuth = require('../middleware/requireAuth')
const empRouter=express.Router()

empRouter.post('/createEmp',requireAuth,createEmp)

empRouter.get('/allEmp',requireAuth,allEmps)

empRouter.get('/getEmp/:id',requireAuth,getEmp)

empRouter.get('/searchEmp',requireAuth,getEmpSearch)

empRouter.put('/editEmp/:id',requireAuth,editEmp)

empRouter.delete('/delEmp/:id',requireAuth,delEmp)

module.exports=empRouter

