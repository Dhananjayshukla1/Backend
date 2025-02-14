const express = require("express");
require("dotenv").config();
// console.log(process.env)
const mongoose = require("mongoose");
const app = express();

//must use that middleware to retrive the data

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("Server is started " + `${process.env.PORT}`);
});

app.use("/api/users", () => {});

// database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));


