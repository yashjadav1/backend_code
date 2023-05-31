const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://mongo:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.post("/post", (req, res) => {
console.log("Connected to React");
res.redirect("/");
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

