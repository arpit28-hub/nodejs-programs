require("dotenv").config();

// Core Modules
const express = require("express");
const bcrypt = require("bcrypt");
const PORT = process.env.PORT;

// Exterbal Modules
// ROUTES
const userRoute = require("./routes/userRoutes");
const signupRoute = require("./routes/signupRoute");
const app = express();
// Middleware
app.use(express.json());
// is middleware in Express that parses incoming requests with JSON payloads.
// Purpose:
// It automatically parses the body of HTTP requests with Content-Type: application/json and makes the parsed data available in req.body.
app.use("/signup", signupRoute);
app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
``;
