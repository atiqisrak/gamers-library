const express = require("express");
const {
  createUser,
  loginUser,
  logoutUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  bulkCreateUsers,
} = require("../controllers/userController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(createUser).get(protect, getUsers);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);

router.route("/bulk").post(protect, authorize("superadmin"), bulkCreateUsers);

router
  .route("/:id")
  .get(protect, getUserById)
  .put(protect, updateUser)
  .delete(protect, deleteUser);

module.exports = router;
