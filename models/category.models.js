// 1 import mongoose
const mongoose = require("mongoose");

// 2 create schema by mongoose.schema

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: string,
      required: true,
      
    },
  },
  {
    timestamps: true,
  }
);

// export model
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
