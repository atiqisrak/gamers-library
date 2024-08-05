const express = require("express");
const {
  createGame,
  getAllGames,
  getGameById,
  updateGameById,
  deleteGameById,
  bulkCreateGames,
} = require("../../controllers/game/gameController");
const { authorize, protect } = require("../../middleware/authMiddleware");

const router = express.Router();

// Create a new game
router.post("/", protect, authorize("admin"), createGame);

// Bulk create games
router.post("/bulk", protect, authorize("admin"), bulkCreateGames);

// Get all games
router.get("/", getAllGames);

// Get a single game by ID
router.get("/:id", getGameById);

// Update a game by ID
router.put("/:id", protect, authorize("admin"), updateGameById);

// Delete a game by ID
router.delete("/:id", protect, authorize("admin"), deleteGameById);

module.exports = router;
