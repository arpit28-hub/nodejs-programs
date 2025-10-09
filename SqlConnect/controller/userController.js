const {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
} = require("../model/userModel");

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await getAllUsers();
      res.status(200).json(result);
    } catch (err) {
      console.error("DB error", err.message);
      res.status(500).json({ success: false, error: "Failed to fetch users" });
    }
  },

  getUser: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await getUserByID(id);
      if (result.error) {
        const status = result.error === "Invalid user Id" ? 400 : 404;
        return res.status(status).json({ success: false, error: result.error });
      }
      res.status(200).json(result);
    } catch (err) {
      console.error("DB error", err.message);
      res.status(500).json({ success: false, error: "Failed to fetch user" });
    }
  },
  addUser: async (req, res) => {
    const { name, email, age } = req.body;
    try {
      const result = await createUser(name, age, email);
      if (result.error) {
        res.status(400).json({ sucess: false, error: result.error });
      }
    } catch (err) {
      console.error("DB error", err.message);
      res
        .status(500)
        .json({ success: false, error: "Failed to create new user" });
    }
  },

  changeUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, age } = req.body;
      const result = await updateUser(id, name, email, age);
      if (result.error) {
        const status = result.error === "Invalid user Id" ? 400 : 404;
        res.status(status).json({ success: false, error: result.error });
      }
      res.status(200).json(result);
    } catch (err) {
      console.error("DB error", err.message);
      res.status(500).json({ success: false, error: "Failed to  Update user" });
    }
  },
  removeUser: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await deleteUser(id);
      if (result.error) {
        const status = result.error === "Invalid user Id" ? 400 : 404;
        res.status(status).json({ success: false, error: result.error });
      }
      res.status(200).json(result);
    } catch (err) {
      console.error("DB error", err.message);
      res.status(500).json({ success: false, error: "Failed to  Update user" });
    }
  },
};
