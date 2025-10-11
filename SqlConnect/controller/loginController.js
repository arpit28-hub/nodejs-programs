const { loginUser } = require("../model/loginModel");
const catchAsync = require("../utils/catchAsync");
module.exports = {
  login: catchAsync(async (req, res, next) => {
    console.log("this is login controller");
    const { email, password } = req.body;
    const result = await loginUser(email, password);

    if (result.error) {
      const err = new Error(result.error);
      err.statusCode = result.error === "Missing Required Fields" ? 400 : 404;
      return next(err);
    }
    res.status(200).json(result);
  }),
};
