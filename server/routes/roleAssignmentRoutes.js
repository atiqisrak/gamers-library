const express = require("express");
const { assignRole } = require("../controllers/roleAssignmentController");
const { protect, authorize } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/assign", protect, authorize("superadmin", "admin"), assignRole);

module.exports = router;
