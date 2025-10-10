const { loginUser } = require("../model/loginModel");
module.exports = {
  login: async (req, res) => {
    try {
      console.log("this is login controller");
      const { email, password } = req.body;
      const result = await loginUser(email, password);
      if (result.error) {
        const status = result.error == "Missing Required Fields" ? 400 : 404;
        res.status(status).json({ success: false, error: result.error });
      }
      res.status(200).json(result);
    } catch (err) {
      console.error("DB error", err.message);
      res.status(500).json({ success: false, error: "User Is Not Registered" });
    }
  },
};
