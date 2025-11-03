require("dotenv").config();

const globalErrorHandler = require("./middleware/globalErrorHandler");
// Core Modules
const express = require("express");
const bcrypt = require("bcrypt");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT;

const app = express();

// it decide where to store the file and what name given to it
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// app.use("/uploads", express.static("uploads"));
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // 1MB file size limit
});
app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("File uploaded successfully!");
});

app.use(
  cors({
    origin: "http://localhost:5173", // your Vue app’s URL
    methods: ["GET", "POST", "PUT", "DELETE"], // allowed HTTP methods
    credentials: true, // allow cookies or tokens if needed
  })
);
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
