const express = require("express");
// core modules
const app = express();
const path = require("path");

//external module
const homeRoute = require('./routes/homeHost')
const blogRoute = require('./routes/blogHost')
const rootdir = require("./utils/pathUtils");
// setting up the view engine to the ejs
app.set("view engine", "ejs");
// set the folders where ejs file will live
app.set("views", path.join(rootdir, "views"));
app.use(homeRoute)
app.use(blogRoute)
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
