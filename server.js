const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection")

connectDb();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
