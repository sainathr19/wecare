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
  // Download the helper library from https://www.twilio.com/docs/node/install
  // Find your Account SID and Auth Token at twilio.com/console
  // and set the environment variables. See http://twil.io/secure
  //   const accountSid = "AC7c9d5c51c2d5d5ea184944afb50da57f";
  //   const authToken = "f2e697c8990b33717b5d3813410061a5";
  //   const client = require("twilio")(accountSid, authToken);

  //   client.calls
  //     .create({
  //       twiml:
  //         "<Response><Say>my name is sainath</Say><Say>This is a ambulance test call</Say><Say>my name is sainath</Say><Say>this is a ambulance test call</Say></Response>",
  //       to: "+919490863408",
  //       from: "+12058947999",
  //     })
  //     .then((call) => console.log(call.sid));
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
