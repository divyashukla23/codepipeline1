const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Ensure logs directory exists
const logDir = path.join(__dirname, "logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logFile = path.join(logDir, "app.log");

app.get("/", (req, res) => {
  const logEntry = `Request at ${new Date().toISOString()}\n`;
  fs.appendFileSync(logFile, logEntry);
  res.send("<h1>Hello from Node.js App with Docker Volume!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
