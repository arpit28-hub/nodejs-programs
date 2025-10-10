const { signUpUser } = require("../model/signupModel");

module.exports = {
  regUser: async (req, res) => {
    const { email, password } = req.body;
    try {
      const result = await signUpUser(email, password);
      if (result.error) {
        return res.status(400).json({ error: result.error });
      }
      res
        .status(201)
        .json({ message: "User Registered Successfully", user: result.user });
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
      console.error(err.message);
    }
  },
};
