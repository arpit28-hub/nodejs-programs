const homeModel = require('../models/home')
const homeStore=new homeModel();
const homeinfo = homeStore.getUserInfo()


const gethome=(req,res)=>{
res.render('home',{ homeinfo })
}

module.exports={gethome};