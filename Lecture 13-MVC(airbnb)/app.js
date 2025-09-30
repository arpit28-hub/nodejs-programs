const express = require("express");
const app = express();
const PORT = 3001;
// external module
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs'); 

// Importing routes
const homeRoute = require("./routes/homeRoute.js")
const addhomeRoute = require("./routes/addhomeRoute.js")
app.use('/',homeRoute)
app.use(express.urlencoded({extended:true}));
app.use('/addHome',addhomeRoute)

app.listen(PORT, () => {
  console.log(`server us running at http://localhost:${PORT}`);
});
