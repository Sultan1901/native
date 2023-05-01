const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require('body-parser')


const app = express();
app.use(express());
app.use(bodyParser.json())
const userRouter = require("./route");
app.use(userRouter);
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`SERVER UNDER ATT4CK ON ${PORT}`);
});
mongoose.connect("mongodb://localhost:27017").then(() => {
  console.log("DB OK");
});