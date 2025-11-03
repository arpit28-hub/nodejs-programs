require("dotenv").config();
const globalErrorHandler = require("./middleware/globalErrorHandler");
// Core Modules
const express = require("express");
const multer = require("multer");
const bcrypt = require("bcrypt");
const PORT = process.env.PORT;

const app = express();

// Configure custom file storage
const storage = multer.diskStorage({
  destination: "uploads/", // folder to save files
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // 1MB file size limit
});
//  Upload route
app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("File uploaded successfully!");
});

// Exterbal Modules
// ROUTES
const routes = require("./routes/index");
// Middleware
// is middleware in Express that parses incoming requests with JSON payloads.
// Purpose:
// It automatically parses the body of HTTP requests with Content-Type: application/json and makes the parsed data available in req.body.
app.use(express.json());
app.use(routes);

// Global error handler
app.use(globalErrorHandler);
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
