const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModels");

const createTask = asyncHandler(async(req ,res) => {
    const {taskName} = req.body;
    if(!taskName){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const newTask = await Task.create({
        taskName,
        user_id: req.user.id
    });
    res.status(201).json(newTask)
});

const seeTask = asyncHandler(async(req,res) => {
    const viewTask = await Task.find({user_id: req.user.id});
    if(!viewTask){
        res.status(404);
        throw new Error("Task not found !");
    }
    res.status(200).json(viewTask)
});

const updateTask = asyncHandler(async (req,res) => {
    const changeTask = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    if(!changeTask){
        res.status(404);
        throw new Error("Task not found !");
    }
    res.status(200).json(changeTask);
});

const deleteTask = asyncHandler(async(req,res) => {
    const closeTask = await Task.findById(req.params.id);
    if(!closeTask){
        res.status(404);
        throw new Error("Task not found!");
    }
    await Task.deleteOne({_id: req.params.id});
    res.status(200).json({closeTask})
});

module.exports = {createTask,seeTask,updateTask,deleteTask};