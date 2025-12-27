const express=require("express");
const User=require('../models/user.model.js')
const bcrypt=require('bcryptjs');


const userRouter=express.Router();


userRouter.post('/register',async(req,res)=>{
    try{
        const userExists=await User.findOne({email:req.body.email});

        if(userExists){
            return res.send({
                success:false,
                message:"User already exists with the email"
            });
        }

        const salt=await bcrypt.genSalt(10);
        const hashPwd=bcrypt.hashSync(req.body.password,salt);
        req.body.password=hashPwd;
        const newUser=new User(req.body);
        await newUser.save();
        return res.status(201).send({
            success:true,
            message:"User registered successfully",
            user:newUser
        });

    }
    catch(error){
        res.send(500).json(
            {
                sucess:false,
                message:error?.message|| 'Internal server error'
            });
    }
});

userRouter.post('/login',async(req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email});
        if(!user){
            res.send({
                success:false,
                message:'User not registered. Please register'
            });
        }
        const validatePassword=bcrypt.compare(req.body.password,user.password);
        if(!validatePassword){
            res.send({
                success:false,
                message:"Sorry, Invaild password entered"
            });
        }
        res.send({
            success:true,
            message:"You have logged in successfully"
        });

    }catch(error){
        res.status(500).json({message:'Error in Logging in'});
    }
})
module.exports=userRouter;