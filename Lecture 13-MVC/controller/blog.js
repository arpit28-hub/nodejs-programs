const blogStore = require("../model/blog.js")
const posts =  blogStore.getAllPosts()
const showPost = (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);
  res.render("blog", { post });
};

module.exports = { showPost };
