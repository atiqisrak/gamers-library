const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, default: null },
  price: { type: Number, required: true },
  discountedPrice: { type: Number, default: null },
  promoCode: { type: String, default: null },
  genre: { type: [String], default: null },
  platform: { type: [String], default: null },
  releaseDate: { type: Date, default: null },
  developer: { type: String, default: null },
  publisher: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
