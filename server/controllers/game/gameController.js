const Game = require("../../models/game/game");
const GameMediaDetails = require("../../models/game/gameDetails");

// Create a new game
exports.createGame = async (req, res) => {
  const {
    title,
    description,
    price,
    discountedPrice,
    promoCode,
    genre,
    platform,
    releaseDate,
    developer,
    publisher,
  } = req.body;

  try {
    const game = new Game({
      title,
      description,
      price,
      discountedPrice,
      promoCode,
      genre,
      platform,
      releaseDate,
      developer,
      publisher,
    });

    await game.save();
    res.status(201).json({ message: "Game created successfully", game });
  } catch (error) {
    console.error("Error creating game:", error);
    res.status(500).json({ message: "Error creating game", error });
  }
};

// Bulk create games
exports.bulkCreateGames = async (req, res) => {
  const games = req.body.games;

  try {
    const createdGames = [];

    for (const gameData of games) {
      const {
        title,
        description,
        price,
        genre,
        platform,
        releaseDate,
        developer,
        publisher,
        images,
        videos,
        discountedPrice,
        promoCode,
      } = gameData;

      const game = new Game({
        title,
        description,
        price,
        genre,
        platform,
        releaseDate,
        developer,
        publisher,
        discountedPrice,
        promoCode,
      });

      const savedGame = await game.save();

      const gameDetails = new GameMediaDetails({
        gameId: savedGame._id,
        images,
        videos,
      });

      await gameDetails.save();

      createdGames.push({
        game: savedGame,
        gameDetails,
      });
    }

    res
      .status(201)
      .json({ message: "Games created successfully", createdGames });
  } catch (error) {
    console.error("Error creating games:", error);
    res.status(500).json({ message: "Error creating games", error });
  }
};

// Get all games
exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    console.error("Error fetching games:", error);
    res.status(500).json({ message: "Error fetching games", error });
  }
};

// Get a single game by ID
exports.getGameById = async (req, res) => {
  const { id } = req.params;

  try {
    const game = await Game.findById(id);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.status(200).json(game);
  } catch (error) {
    console.error("Error fetching game:", error);
    res.status(500).json({ message: "Error fetching game", error });
  }
};

// Update a game by ID
exports.updateGameById = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    price,
    discountedPrice,
    promoCode,
    genre,
    platform,
    releaseDate,
    developer,
    publisher,
  } = req.body;

  try {
    const game = await Game.findById(id);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    game.title = title || game.title;
    game.description = description || game.description;
    game.price = price || game.price;
    game.discountedPrice = discountedPrice || game.discountedPrice;
    game.promoCode = promoCode || game.promoCode;
    game.genre = genre || game.genre;
    game.platform = platform || game.platform;
    game.releaseDate = releaseDate || game.releaseDate;
    game.developer = developer || game.developer;
    game.publisher = publisher || game.publisher;
    game.updatedAt = Date.now();

    await game.save();
    res.status(200).json({ message: "Game updated successfully", game });
  } catch (error) {
    console.error("Error updating game:", error);
    res.status(500).json({ message: "Error updating game", error });
  }
};

// Delete a game by ID
exports.deleteGameById = async (req, res) => {
  const { id } = req.params;

  try {
    const game = await Game.findByIdAndDelete(id);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    // Also delete associated media and details
    await GameMediaDetails.findOneAndDelete({ gameId: id });

    res.status(200).json({ message: "Game deleted successfully" });
  } catch (error) {
    console.error("Error deleting game:", error);
    res.status(500).json({ message: "Error deleting game", error });
  }
};
