class blogModel {
  constructor() {
    this.posts = [
      {
        id: 1,
        title: "Getting started with Express",
        content: "Express makes server building easy!",
      },
      {
        id: 2,
        title: "Understanding EJS",
        content: "EJS lets you write dynamic templates.",
      },
      {
        id: 3,
        title: "Middleware in Express",
        content: "Middleware is like a pipeline for requests.",
      },
    ];
  }
  getAllPosts() {
    return this.posts;
  }
}
// export the class by itself
module.exports = blogModel;
