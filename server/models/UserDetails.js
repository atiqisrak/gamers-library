const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserDetailsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  profilePicture: {
    type: String,
  },
  preferences: {
    language: { type: String, default: "en" },
    currency: { type: String, default: "BDT" },
  },
  online_id: {
    type: String,
    ref: "User",
    required: true,
  },
  online_status: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  about: {
    type: String,
  },
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
  permissions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Permission",
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

UserDetailsSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const UserDetails = mongoose.model("UserDetails", UserDetailsSchema);

module.exports = UserDetails;
