const express = require("express");

const app = express();

//must use that middleware to retrive the data

app.use(express.json());

app.listen(5000, () => {
  console.log("Server is started");
});




