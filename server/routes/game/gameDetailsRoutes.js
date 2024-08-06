const express = require("express");
const {
  createGameDetails,
  getGameDetailsByGameId,
  updateGameDetailsByGameId,
  deleteGameDetailsByGameId,
  getAllGameDetails,
} = require("../../controllers/game/gameDetailsController");
const upload = require("../../middleware/upload");

const router = express.Router();

// Add media and details for a game
router.post(
  "/",
  upload.fields([
    { name: "images", maxCount: 10 },
    { name: "videos", maxCount: 5 },
  ]),
  createGameDetails
);

// Get all game details
router.get("/", getAllGameDetails);

// Get media and details for a game by Game ID
router.get("/:gameId", getGameDetailsByGameId);

// Update media and details for a game by Game ID
router.put(
  "/:gameId",
  upload.fields([
    { name: "images", maxCount: 10 },
    { name: "videos", maxCount: 5 },
  ]),
  updateGameDetailsByGameId
);

// Delete media and details for a game by Game ID
router.delete("/:gameId", deleteGameDetailsByGameId);

module.exports = router;
