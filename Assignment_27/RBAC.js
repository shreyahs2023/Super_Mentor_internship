const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

// Middleware to verify token
function authenticate(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const decoded = jwt.verify(token, "secretKey");
    req.user = decoded;
    next();
  } catch {
    res.status(400).json({ message: "Invalid token" });
  }
}

// Middleware to check admin role
function authorizeAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Forbidden: Admins only" });
  }
  next();
}

// Public route
app.get("/", (req, res) => {
  res.send("Public Content");
});

// Protected route (any logged-in user)
app.get("/dashboard", authenticate, (req, res) => {
  res.send("User Dashboard");
});

// Admin-only route
app.get("/admin", authenticate, authorizeAdmin, (req, res) => {
  res.send("Admin Panel");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});