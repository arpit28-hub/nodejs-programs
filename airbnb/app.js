const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();

// Local Module
const userRouter = require("./routes/adduser");
const hostRouter = require("./routes/hostuser");
const rootdir = require("./utils/pathUtil");

//this middleware is parsing the form data in the post req into the req.body
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(rootdir,'public')))
// routes
app.use(userRouter);
app.use(hostRouter);
//this middleware runs when none of the path get matched ordering is important here
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootdir, "views", "404.html"));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
