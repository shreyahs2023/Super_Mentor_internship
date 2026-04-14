const express = require("express");
const app = express();
const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());
app.use("/", taskRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});