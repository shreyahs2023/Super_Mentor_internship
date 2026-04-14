const express = require("express");
const router = express.Router();
const controller = require("../controllers/taskController");

router.get("/tasks", controller.getTasks);
router.post("/tasks", controller.createTask);

module.exports = router;