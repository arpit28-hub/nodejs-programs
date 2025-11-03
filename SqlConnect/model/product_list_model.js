// const { loginUser } = require("../model/loginModel");
const catchAsync = require("../utils/catchAsync");
module.exports = {
  getProductList: catchAsync(async (req, res, next) => {
    console.log("this is login controller");
    // const { email, password } = req.body;
    const productdata={
        product_name=
    }
    const result = await loginUser(email, password);

    if (result.error) {
      const err = new Error(result.error);
      err.statusCode = result.error === "Missing Required Fields" ? 400 : 404;
      return next(err);
    }
    res.status(200).json(result);
  }),
};
