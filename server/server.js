require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) console.log(err);
    else console.log("Connected to MongoDB");
  }
);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");

app.use("/api", productRoutes);
app.use("/api", categoryRoutes);

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log("Listening on Port 3000");
});
