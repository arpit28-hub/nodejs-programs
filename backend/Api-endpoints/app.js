const http = require("http");
// const { users, products, orders, carts, categories } = require("./db/dbs");
const {reqhandler}=require("./reqHandler")
const server = http.createServer(reqhandler);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
