const express = require("express");
const mongoose = require("mongoose");
const app = express();

//must use that middleware to retrive the data

app.use(express.json());

app.listen(5000, () => {
  console.log("Server is started");
});


app.use("/api/users",)
app.use("/api/users",)



















mongoose
  .connect("mongodb+srv://dhananjayshukla199:rcUvL0yQwSoJxe4j@cluster1.q0rg9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
  .then(function (db) {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.log(err);
  });
