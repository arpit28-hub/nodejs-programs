require("dotenv").config();

// Core Modules
const express = require("express");
const bcrypt = require("bcrypt");
const PORT = process.env.PORT;

const app = express();
// Exterbal Modules
// ROUTES
const routes = require("./routes/index");
// Middleware
// is middleware in Express that parses incoming requests with JSON payloads.
// Purpose:
// It automatically parses the body of HTTP requests with Content-Type: application/json and makes the parsed data available in req.body.
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
