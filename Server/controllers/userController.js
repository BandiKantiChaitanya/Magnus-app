const Users = require("../models/userSchema")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
require('dotenv').config();
const cloudinary=require('cloudinary').v2

const SECRET_KEY=process.env.SECRET_KEY

const createUser=async (req,res)=>{
    try {
        const {email,mobile,password}=req.body
        const user= await Users.findOne({email})
        if(!user){
            const hashedPass=await bcrypt.hash(password,10)
            console.log(hashedPass,'hi')
            const newUser=Users({
            email,
            mobile,
            password:hashedPass
            })
        await newUser.save()
        res.status(201).json({ message: 'User created successfully'});
        }
        
    } catch (error) {
        res.status(500).json({message:'Error occured'})
    }

}

const UserLogin=async (req,res)=>{
    try {
        const {email,password}=req.body
        const user=await Users.findOne({email})
        if(!user){
           return res.status(400).json({message:'Invalid Email'})
        }
        const matchpass=await bcrypt.compare(password,user.password)
        if(!matchpass){
            res.status(400).json({message:'Invalid Password'})
        }
        // req.session.userId=existingUser._id
        // res.status(200).json({message:'User Logged In Succesfully'})
        const token=jwt.sign({userId:user._id},SECRET_KEY,{expiresIn:'1h'})
        return res.status(200).json({message:'User Logged In Succesfully',token})
    } catch (error) {
       return res.status(500).json({message:'Internal server Error'})
    }
}

const UpdateUser =async(req,res)=>{
    try {  
        const  userId  = req.userId
        const uploadedImages = req.files.map(file => file.path)
        const user = await Users.findById(userId)

        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }       
        // Upload new images to Cloudinary and store their URLs
        // user.image = uploadedImages;
        user.image.push(...uploadedImages);

        await user.save();

        return res.status(200).json({ message: 'User updated successfully', user })
        
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
}

const deleteImage = async (req, res) => {
    try {
        const  userId  = req.userId; // Get the user ID from the token or session
        const { imageUrl } = req.body; // Get the image URL to be deleted from the request body

        const user = await Users.findById(userId); // Find the user in MongoDB

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Find the public ID from the Cloudinary URL
        const publicId = imageUrl.split('/').slice(7).join('/').split('.')[0]

        // Remove the image from Cloudinary
        await cloudinary.uploader.destroy(publicId);

        // Remove the image URL from the user's image array in MongoDB
        const updatedImages = user.image.filter((imgUrl) => imgUrl !== imageUrl);
        user.image = updatedImages;

        // Save the updated user document in MongoDB
        await user.save();

        return res.status(200).json({ message: 'Image deleted successfully', user });
    } catch (error) {
        console.error('Error deleting image:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// const UserLogout=async(req,res)=>{

// }

const UserImage=async(req,res)=>{
    try {
        const userId=req.userId
        const user = await Users.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'Images fetched', images: user.image });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
}

module.exports={
    createUser,
    UserLogin,
    UpdateUser,
    deleteImage,
    UserImage
}