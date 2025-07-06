const asyncHandler = require("express-async-handler");
const task = require("../models/taskModels");

const postTask = asyncHandler(async(req ,res) => {
    const {taskName} = req.body;
    if(!taskName){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const newtask = await task.create({
        taskName
    });
    res.status(201).json(newtask)
})

module.exports = {postTask};