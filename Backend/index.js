const mongoose = require("mongoose");
var cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://sainath:sainath@cluster0.mez8kyv.mongodb.net/?retryWrites=true&w=majority";
var client = new MongoClient(uri);
const database = client.db("wecare");
const patientdata = database.collection("patientdata");
const credentials = database.collection("credentials");
app.listen(5000, () => {
  console.log(`Listening port`);
});

app.get("/", async (req, res) => {
  var r = await credentials.findOne({
    username: req.query.username,
    password: req.query.password,
  });
  res.send(r);
  console.log(r);
});

app.get("/dashboard", async (req, res) => {
  var r = await patientdata.findOne({ username: req.query.username });
  res.send(r);
  console.log(r);
});

app.use("/", require("./routes/home.js"));
