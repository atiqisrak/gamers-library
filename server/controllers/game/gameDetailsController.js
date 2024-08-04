const GameMediaDetails = require("../../models/game/gameDetails");
const Game = require("../../models/game/game");

// Add media and details for a game
exports.createGameDetails = async (req, res) => {
  const { gameId, additionalDetails } = req.body;

  try {
    const game = await Game.findById(gameId);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    const imageURLs = req.files.images
      ? req.files.images.map((file) => `/uploads/${file.filename}`)
      : [];
    const videoURLs = req.files.videos
      ? req.files.videos.map((file) => `/uploads/${file.filename}`)
      : [];

    const gameDetails = new GameMediaDetails({
      gameId,
      images: imageURLs,
      videos: videoURLs,
      additionalDetails,
    });

    await gameDetails.save();
    res
      .status(201)
      .json({ message: "Game details added successfully", gameDetails });
  } catch (error) {
    console.error("Error adding game details:", error);
    res.status(500).json({ message: "Error adding game details", error });
  }
};

// Get media and details for a game by Game ID
exports.getGameDetailsByGameId = async (req, res) => {
  const { gameId } = req.params;

  try {
    const gameDetails = await GameMediaDetails.findOne({ gameId });
    if (!gameDetails) {
      return res.status(404).json({ message: "Game details not found" });
    }
    res.status(200).json(gameDetails);
  } catch (error) {
    console.error("Error fetching game details:", error);
    res.status(500).json({ message: "Error fetching game details", error });
  }
};

// Update media and details for a game by Game ID
exports.updateGameDetailsByGameId = async (req, res) => {
  const { gameId } = req.params;
  const { images, videos, additionalDetails } = req.body;

  try {
    const gameDetails = await GameMediaDetails.findOne({ gameId });
    if (!gameDetails) {
      return res.status(404).json({ message: "Game details not found" });
    }

    gameDetails.images = images || gameDetails.images;
    gameDetails.videos = videos || gameDetails.videos;
    gameDetails.additionalDetails =
      additionalDetails || gameDetails.additionalDetails;
    gameDetails.updatedAt = Date.now();

    await gameDetails.save();
    res
      .status(200)
      .json({ message: "Game details updated successfully", gameDetails });
  } catch (error) {
    console.error("Error updating game details:", error);
    res.status(500).json({ message: "Error updating game details", error });
  }
};

// Delete media and details for a game by Game ID
exports.deleteGameDetailsByGameId = async (req, res) => {
  const { gameId } = req.params;

  try {
    const gameDetails = await GameMediaDetails.findOneAndDelete({ gameId });
    if (!gameDetails) {
      return res.status(404).json({ message: "Game details not found" });
    }

    res.status(200).json({ message: "Game details deleted successfully" });
  } catch (error) {
    console.error("Error deleting game details:", error);
    res.status(500).json({ message: "Error deleting game details", error });
  }
};
