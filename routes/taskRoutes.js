const express = require("express");
const router = express.Router();
const { postTask } = require("../controllers/taskController");

// POST /api/tasks - Add a new task
router.route("/").post(postTask);

module.exports = router;