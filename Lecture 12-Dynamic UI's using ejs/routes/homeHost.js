const express = require('express'); 
const path = require('path')
const router = express.Router();
const posts = [
        { id: 1, title: "Getting started with Express", content: "Express makes server building easy!" },
        { id: 2, title: "Understanding EJS", content: "EJS lets you write dynamic templates." },
        { id: 3, title: "Middleware in Express", content: "Middleware is like a pipeline for requests." }
      ];
router.get('/',(req,res,next)=>{
res.render("home",{posts});
});

module.exports=router;
