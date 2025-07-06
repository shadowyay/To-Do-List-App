const express = require("express");
const router = express.Router();
const { createTask,seeTask } = require("../controllers/taskController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken)
router.route("/").post(createTask);
router.route("/").get(seeTask);

module.exports = router;