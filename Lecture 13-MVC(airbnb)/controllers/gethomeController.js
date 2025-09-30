const { request } = require("express");

const gethomeModel = require('../models/addhome.model')
const getHomeStore =new gethomeModel();

const gethomedata = (req,res)=>{
res.render('adduser')
} 

const posthomedata = (req,res)=>{
//    const { h_name, loc, no_room, price_per_night, desc } = req.body;
    //  const homeArr = getHomeStore.addHomeData(h_name, loc, no_room, price_per_night, desc);   
    console.log(req.body)
}
module.exports = {gethomedata,posthomedata};

