const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);;

// Middleware to parse JSON
app.use(express.json());

// Task routes
app.use("/api/tasks", require("./routes/taskRoutes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
