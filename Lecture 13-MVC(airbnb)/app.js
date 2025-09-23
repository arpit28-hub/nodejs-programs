const express = require('express')
const app= express()
const homeRoute=require('./routes/homeRoute')
const roleRoute=require('./routes/roleRoute')
app.use(homeRoute);
app.use(roleRoute);
// app.set("view engine", ejs) //setting up the ejs engine
app.set("view engine", "ejs"); //
// app.use("views", path.join(__dirname, "views")); // optional, default = ./views
const PORT =3001;
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
});