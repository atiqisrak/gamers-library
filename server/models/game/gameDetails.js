const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameDetailsSchema = new Schema({
  gameId: { type: Schema.Types.ObjectId, ref: "Game", required: true },
  images: { type: [String], default: null },
  videos: { type: [String], default: null },
  additionalDetails: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const GameMediaDetails = mongoose.model("GameMediaDetails", gameDetailsSchema);

module.exports = GameMediaDetails;
