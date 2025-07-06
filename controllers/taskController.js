const asyncHandler = require("express-async-handler");
const task = require("../models/taskModels");

const createTask = asyncHandler(async(req ,res) => {
    const {taskName} = req.body;
    if(!taskName){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const newtask = await task.create({
        taskName,
        user_id: req.user.id
    });
    res.status(201).json(newtask)
});

const seeTask = asyncHandler(async(req,res) => {
    const tasks = await task.find({user_id: req.user.id});
    res.status(200).json(tasks)
});

module.exports = {createTask,seeTask};