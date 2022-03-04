const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 25,
      unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
      },
    email: {
      type: String,
      required: true,
      max: 60,
      unique: true,
    },
    followers: {
        type: Array,
        default: [],
    },
    followings: {
    type: Array,
    default: [],
    },
    profilePic: {
      type: String,
      default: "",
    },
    coverPic: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 60,
      default:"",
    },
    city: {
      type: String,
      max: 60,
      default: "",
    },
    from: {
      type: String,
      max: 60,
      default: "",
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);