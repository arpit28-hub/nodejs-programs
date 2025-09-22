
const homeModel = require("../model/home.js")
const homeStore = new homeModel(); 
const posts = homeStore.getAllPost();
const getHomes = (req, res) => {
  res.render("home",{posts});
};
module.exports = { getHomes};
