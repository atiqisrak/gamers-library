const express = require("express");
const {
  createDeal,
  getDeals,
  getDealById,
  updateDealById,
  deleteDealById,
} = require("../../controllers/deal/dealController");
const { protect, authorize } = require("../../middleware/authMiddleware");

const router = express.Router();

// Create a new deal
router.post("/", protect, authorize("admin"), createDeal);

// Get all deals
router.get("/", getDeals);

// Get a single deal by ID
router.get("/:id", getDealById);

// Update a deal by ID
router.put("/:id", protect, authorize("admin"), updateDealById);

// Delete a deal by ID
router.delete("/:id", protect, authorize("admin"), deleteDealById);

module.exports = router;
