const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { constants } = require("../constants");
const bcrypt = require("bcrypt")

const registerUser = asyncHandler(async(req,res) => {
    const{username,email,password} = req.body;
    if(!username||!email||!password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("Email already registered!");
    }
    const hashedPassword = await bcrypt.hash(password,10);
    console.log("hashed Password",hashedPassword);
    const user = User.create({
        username,
        email,
        password: hashedPassword,
    });

    console.log(`User created ${user}`)
    res.json({message:"Register User"});
    if (user){
        res.status(201).json({_id: (await user).id,email: user.email})
    } else {
        res.status(400);
        throw new Error("User data not valid")
    }
});

const loginUser=asyncHandler(async(req,res) => {
    res.json({message:"Login user"});
});

module.exports={registerUser,loginUser};