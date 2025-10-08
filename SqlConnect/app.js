require("dotenv").config();

const userRoute = require("./routes/userRoutes");
const express = require("express");
const PORT = process.env.PORT;
const app = express();

// Middleware
app.use(express.json());
// is middleware in Express that parses incoming requests with JSON payloads.
// Purpose:
// It automatically parses the body of HTTP requests with Content-Type: application/json and makes the parsed data available in req.body.
app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
``;
