// 1 import mongoose
const mongoose = require("mongoose");

// 2 create schema by mongoose.schema

const userSchema = new mongoose.Schema(
  {
    username: {
      type: string,
      required: true,
      unique: true,
    },
    email: {
      type: string,
      required: true,
      unique: true,
      lowercase: [true, "email should be in lowercase"],
    },
    password: {
      type: string,
      required: true,
      min: [6, "Must be atleast 6, got {value}"],
      max: 12,
    },
    confirmPassword: {
      type: string,
      required: true,
      min: [6, "Must be atleast 6, got {value}"],
      max: 12,
    },
  },
  {
    timestamps: true,
  }
);

// export model
const Users = mongoose.model("Users", userSchema);
module.exports = Users;

