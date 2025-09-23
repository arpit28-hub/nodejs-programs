
const rootdir = require('../utils/pathUtils')
const path = require('path')
const getrole=(req,res)=>{
res.sendFile(path.join(rootdir,'views','roles.html'))
}

module.exports={getrole};