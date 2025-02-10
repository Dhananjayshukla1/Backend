// 1 import mongoose
const mongoose = require("mongoose");

// 2 create schema by mongoose.schema

const orderSchema = new mongoose.Schema(
  {
    client:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    product:{
        type
    },
    status:{
        type:string,
        unum:["Pending","Delivery","Shipping"],
        default:"Pending"
    }
  },
  {
    timestamps: true,
  }
);

// export model
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
