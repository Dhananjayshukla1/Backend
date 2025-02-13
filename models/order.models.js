// 1 import mongoose
const mongoose = require("mongoose");

// 2 create schema by mongoose.schema

// const productItems = new mongoose.Schema({
//   product: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Product"
//   },
//   quantity: {
//     type: Number,
//     default: 0
//   }
// })


const orderSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItem: {
      type: [{
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product"
        },
        quantity: {
          type: Number,
          default: 0
        }
      }]
    },
    orderPrice: {
      type: Number,
      require: true
    },
    status: {
      type: string,
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
