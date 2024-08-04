const User = require("../models/User");
const Role = require("../models/Role");
const { check, validationResult } = require("express-validator");
const Admin = require("../models/Admin");
const Customer = require("../models/Customer");
const UserDetails = require("../models/UserDetails");

exports.assignRole = [
  check("userId").isMongoId().withMessage("Invalid user ID"),
  check("roleName").not().isEmpty().withMessage("Role name is required"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { userId, roleName } = req.body;
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const role = await Role.findOne({ name: roleName }).populate(
        "permissions"
      );
      if (!role) {
        return res.status(404).json({ message: "Role not found" });
      }

      if (!user.roles.includes(role._id)) {
        user.roles.push(role._id);
        await user.save();
      }

      // Update UserDetails with roles and permissions
      const userDetails = await UserDetails.findOne({ userId: user._id });
      if (userDetails) {
        userDetails.roles = user.roles;
        userDetails.permissions = [
          ...new Set(
            userDetails.permissions.concat(
              role.permissions.map((permission) => permission._id)
            )
          ),
        ];
        await userDetails.save();
      }

      // Add user to the corresponding collection based on role
      if (roleName === "admin") {
        const admin = await Admin.findOneAndUpdate(
          { userId: user._id },
          {
            userId: user._id,
            roles: user.roles,
            permissions: role.permissions,
          },
          { upsert: true, new: true, setDefaultsOnInsert: true }
        ).populate("roles permissions");
      } else if (roleName === "customer") {
        const customer = await Customer.findOneAndUpdate(
          { userId: user._id },
          {
            userId: user._id,
            roles: user.roles,
            permissions: role.permissions,
          },
          { upsert: true, new: true, setDefaultsOnInsert: true }
        ).populate("roles permissions");
      }

      res.status(200).json({
        message: "Role assigned successfully",
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
          roles: user.roles,
        },
      });
    } catch (error) {
      console.error("Error assigning role:", error);
      res.status(500).json({ message: "Error assigning role", error });
    }
  },
];
