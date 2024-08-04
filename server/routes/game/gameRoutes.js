const express = require("express");
const {
  createGame,
  getAllGames,
  getGameById,
  updateGameById,
  deleteGameById,
} = require("../../controllers/game/gameController");

const router = express.Router();

// Create a new game
router.post("/", createGame);

// Get all games
router.get("/", getAllGames);

// Get a single game by ID
router.get("/:id", getGameById);

// Update a game by ID
router.put("/:id", updateGameById);

// Delete a game by ID
router.delete("/:id", deleteGameById);

module.exports = router;
