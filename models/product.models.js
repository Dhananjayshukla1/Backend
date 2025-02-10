// 1 import mongoose
const mongoose = require("mongoose");

// 2 create schema by mongoose.schema

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: string,
      required: true,
    },
    product_description: {
      type: string,
      required: true,
    },
    product_price: {
      type: Number,
      required: true,
      default:0
    },
    stock: {
      type: Number,
      required: true,
      default: 0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category"
    }
  },
  {
    timestamps: true,
  }
);

// export model
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
