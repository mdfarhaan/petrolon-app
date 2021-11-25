require("dotenv").config();
const express = require("express");
const router = express.Router();
const URL = process.env.URL;
const MongoClient = require("mongodb").MongoClient;

//Get all Vehicles - Homepage
router.get("/get", (req, res) => {
  let resultArray = [];
  MongoClient.connect(URL, (err, client) => {
    let db = client.db("petrolonDB");
    let cursor = db.collection("vehicles").find();
    cursor.forEach(
      (doc, err) => {
        resultArray.push(doc);
      },
      () => {
        res.send(resultArray);
      }
    );
  });
});

//Add data
router.post("/add", (req, res) => {
  MongoClient.connect(URL, (err, client) => {
    const data = {
      vehicle: req.body.vehicle,
      amt: req.body.amt,
      litres: req.body.litres,
    };
    let db = client.db("petrolonDB");
    db.collection("vehicles").insertOne(data, (err) => {
      err ? console.log(err) : console.log("Item added successfully");
    });
  });
});

module.exports = router;
