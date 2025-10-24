const { signUpUser } = require("../models/signupModel");
const catchAsync = require("../utils/catchAsync");
module.exports = {
  regUser: catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    const result = await signUpUser(email, password);
    if (result.error) {
      const err = new Error(result.error);
      err.statusCode = 400;
      return next(err);
    }
    res
      .status(201)
      .json({ message: "User Registered Successfully", user: result.user });
  }),
};
