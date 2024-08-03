const Admin = require("../models/Admin");
const User = require("../models/User");
const UserRole = require("../models/UserRole");
const Role = require("../models/Role");
const { check, validationResult } = require("express-validator");

// Create Admin
exports.createAdmin = [
  check("userId").isMongoId().withMessage("Invalid user ID"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { userId, roleId } = req.body;
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const role = await Role.findById(roleId);
      if (!role) {
        return res.status(404).json({ message: "Role not found" });
      }

      const userRole = new UserRole({ userId, roleId });
      await userRole.save();

      res.status(201).json({
        message: "Admin role assigned successfully",
        userRole: {
          _id: userRole._id,
          userId: userRole.userId,
          roleId: userRole.roleId,
        },
      });
    } catch (error) {
      console.error("Error creating admin:", error);
      res.status(500).json({ message: "Error creating admin", error });
    }
  },
];

// Get All Admins
exports.getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({}).populate("userId", "username email");
    res.status(200).json(admins);
  } catch (error) {
    console.error("Error fetching admins:", error);
    res.status(500).json({ message: "Error fetching admins", error });
  }
};

// Get Admin by ID
exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id).populate(
      "userId",
      "username email"
    );
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json(admin);
  } catch (error) {
    console.error("Error fetching admin:", error);
    res.status(500).json({ message: "Error fetching admin", error });
  }
};

// Update Admin
exports.updateAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    admin.roles = req.body.roles || admin.roles;
    admin.permissions = req.body.permissions || admin.permissions;
    await admin.save();
    res.status(200).json({
      message: "Admin updated successfully",
      admin: {
        _id: admin._id,
        userId: admin.userId,
        roles: admin.roles,
        permissions: admin.permissions,
      },
    });
  } catch (error) {
    console.error("Error updating admin:", error);
    res.status(500).json({ message: "Error updating admin", error });
  }
};

// Delete Admin
exports.deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    console.error("Error deleting admin:", error);
    res.status(500).json({ message: "Error deleting admin", error });
  }
};
