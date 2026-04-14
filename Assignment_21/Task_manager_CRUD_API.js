const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];
let idCounter = 1;

// CREATE Task
app.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = { id: idCounter++, title };
  tasks.push(newTask);

  res.status(201).json(newTask);
});

// READ All Tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// READ Single Task
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.json(task);
});

// UPDATE Task
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.title = req.body.title || task.title;
  res.json(task);
});

// DELETE Task
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: "Task deleted" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});