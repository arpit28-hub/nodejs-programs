const { users, products, orders, carts, categories } = require("./db/dbs");

const reqhandler = (req, res) => {
  if (req.url === "/user" && req.method == "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    console.log(users[0]);
    res.end(JSON.stringify(users));
    return;
  } else if (req.url === "/products" && req.method == "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
    return;
  } else if (req.url === "/orders" && req.method == "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(orders));
    return;
  } else if (req.url === "/carts" && req.method == "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(carts));
    return;
  } else if (req.url === "/categories" && req.method == "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(categories));
    return;
  }else if (req.url === "/add-user" && req.method == "GET") {
    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.end(JSON.stringify(categories));
    // return;
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    console.log(req.url, req.method);
    res.write(`
  <h1>This is Home</h1>
  <ul>
    <li><a href='/user'>Get Users</a></li>
    <li><a href='/products'>Get Products</a></li>
    <li><a href='/orders'>Get Orders</a></li>
    <li><a href='/carts'>Get Carts</a></li>
    <li><a href='/categories'>Get Categories</a></li>
  </ul>
`);
    res.end();
  }
};

module.exports = { reqhandler };
