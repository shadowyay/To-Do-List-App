const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const errorHandler = require("./middleware/errorhandler");
const app = express();
const port = process.env.PORT || 3000;

console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully!");
})
.catch((err) => {
    console.error("MongoDB Connection Error:", err);
});

app.use(express.json());
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
