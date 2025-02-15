// 1 import mongoose
const mongoose = require("mongoose");

// 2 create schema by mongoose.schema

const productItemsSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },
  quantity: {
    type: Number,
    default: 0
  }
})


const orderSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItem: {
      type: [
        productItemsSchema
    ]
    },
    orderPrice: {
      type: Number,
      require: true
    },
    status: {
      type: String,
      unum: ["Pending", "Delivery", "Shipping"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

// export model
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
