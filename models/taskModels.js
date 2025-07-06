const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, require: true , ref: "User"},
    taskName: {type: String, required: true}
});

module.exports = mongoose.model("task",taskSchema);