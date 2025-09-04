const Employee = require("../models/employeeSchema")



const createEmp=(req,res)=>{
    try {
        const {firstName,lastName,mobile,email,gender,country,city,dob,address,skills}=req.body
        const newEmp=Employee({
            firstName,
            lastName,
            mobile,
            email,
            gender,
            country,
            city,
            dob,
            address,
            skills
        })
        // console.log('req.body:', req.body);
        newEmp.save()
        .then(response=>{
            res.status(200).json({message:'Employee Created Succesfully'})
        })
        .catch(err=>{
            res.status(400).json({message:'Error occured in creating employee'})
        })
    } catch (error) {
        console.error("Server error:", error); 
        res.status(500).json({message:'Server error occured in creating employee'})
    }
}

const allEmps=async (req,res)=>{
    try {
        const page = parseInt(req.query.page) 
        const limit=parseInt(req.query.limit) 

        const skip = (page - 1) * limit

        const totalEmployees = await Employee.countDocuments();
        const totalPages = Math.ceil(totalEmployees / limit);


        const response=await Employee.find().skip(skip).limit(limit)


        res.status(200).json({message:'All Employee',data:response,page,limit,totalPages})
    } catch (error) {
         res.status(500).json({message:'Server error occured in fetching employee data'})
    }
}

const getEmp=async(req,res)=>{
    try {
        const {id}=req.params
        const response=await Employee.findById(id)
        res.status(200).json({message:'Employee',data:response})
    } catch (error) {
         res.status(500).json({message:'Server error occured in fetching employee data'})
    }
}

const getEmpSearch= async (req,res)=>{
    try {
        const {name,mobile}=req.query

        let filter = {}

        if(name && mobile){
            filter={
                $and: [
                {
                    $or: [
                    { firstName: { $regex: name, $options: 'i' } },
                    { lastName: { $regex: name, $options: 'i' } },
                    {
                    $expr: {
                        $regexMatch: {
                        input: { $concat: ['$firstName', '$lastName'] },
                        regex: name,
                        options: 'i'
                        }
                    }
                    },
                    {
                    $expr: {
                        $regexMatch: {
                        input: { $concat: ['$firstName', ' ', '$lastName'] },
                        regex: name,
                        options: 'i'
                        }
                    }
                    }
                    ]
                },
                { mobile: { $regex: mobile }  }
                ]
            }
        }else if(name){
            filter={
                $or:[
                    {firstName: { $regex : name, $options: 'i' } },
                    {lastName: { $regex : name, $options: 'i' } },
                    {
                    $expr: {
                        $regexMatch: {
                        input: { $concat: ['$firstName', '$lastName'] },
                        regex: name,
                        options: 'i'
                        }
                    }
                    },
                    {
                    $expr: {
                        $regexMatch: {
                        input: { $concat: ['$firstName', ' ', '$lastName'] },
                        regex: name,
                        options: 'i'
                        }
                    }
                    }
                ]
            }
        }else if(mobile){
            filter={mobile: { $regex: mobile } }
        }
        
        const response=await Employee.find(filter)

        res.status(200).json({message:'Employee name',data:response})
          
    } catch (error) {
        res.status(500).json({message:'Server Error occured in fetching data'})
    }
}

const editEmp=(req,res)=>{
    try {
        const {id}=req.params
        const updatedData=req.body
        Employee.findByIdAndUpdate(id,updatedData)
        .then(response=>{
            res.status(200).json({message:'Employee Updated Succesfully'})
        })
        .catch(err=>{
            res.status(400).json({message:'Error occured in updating employee'})
        })
    } catch (error) {
        res.status(500).json({message:'Server Error occured in updating employee'})
    }
}

const delEmp=async (req,res)=>{
    try {
        const {id}=req.params
        const response=await Employee.findByIdAndDelete(id)
        if (!response) {
        return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({message:'Employee Deleted Successfully',data:response})
    } catch (error) {
        res.status(500).json({message:'Server Error occured in deleting Employee'})
    }
}

module.exports={
    createEmp,
    allEmps,
    getEmp,
    getEmpSearch,
    editEmp,
    delEmp
}

