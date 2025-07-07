const express = require("express");
const router = express.Router();
const { createTask,seeTask,updateTask,deleteTask } = require("../controllers/taskController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken)
router.route("/").post(createTask);
router.route("/").get(seeTask);
router.route("/:id").put(updateTask);
router.route("/:id").delete(deleteTask);

module.exports = router;