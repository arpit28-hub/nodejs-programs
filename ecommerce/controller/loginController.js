const { loginUser } = require("../models/loginModel");
const catchAsync = require("../utils/catchAsync");
module.exports = {
  signIn: catchAsync(async (req, res, next) => {
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

