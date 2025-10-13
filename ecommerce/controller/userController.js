const { fetchAllUsers } = require("../models/userModel");

module.exports = {
  getall: async (req, res) => {
    const result = await fetchAllUsers();
    if (result.error) {
      const err = new Error(result.error);
      err.statusCode = 404;
      return next(err);
    }
    res.status(200).json(result);
  },
};
