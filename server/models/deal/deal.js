const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DealSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    nullable: true,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  discounts: [
    {
      gameId: {
        type: Schema.Types.ObjectId,
        ref: "Game",
      },
      discount: {
        type: Number,
      },
      promoCode: {
        type: String,
        nullable: true,
      },
      discountedPrice: {
        type: Number,
        nullable: true,
      },
      additionalDetails: {
        type: String,
        nullable: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

DealSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Deal = mongoose.model("Deal", DealSchema);

module.exports = Deal;
