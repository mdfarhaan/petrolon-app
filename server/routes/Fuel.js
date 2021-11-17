require("dotenv").config();
const express = require("express");
const router = express.Router();
const URL = process.env.URL;
const MongoClient = require("mongodb").MongoClient;

//Get all fuel data - Vehicles Screen
router.get("/get/:vh", (req, res) => {
  const vh = req.params.vh;
  let resultArray = [];
  MongoClient.connect(URL, (err, client) => {
    let db = client.db("petrolonDB");
    let cursor = db.collection("fuel").find({ vehicle: vh });
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
    const { vehicle, price, litres } = req.body;
    const data = {
      vehicle: vehicle,
      price: price,
      litres: litres,
      date: req.body.date,
    };
    let db = client.db("petrolonDB");
    db.collection("fuel").insertOne(data, (err) => {
      err ? console.log(err) : console.log("Item added successfully");
    });
    //Update Amt and litres in Vehicle
    updateVh(vehicle, price, litres);
  });
});

const updateVh = (vehicle, price, lit) => {
  MongoClient.connect(URL, (err, client) => {
    let db = client.db("petrolonDB");
    let cursor = db.collection("vehicles").find({ vehicle: vehicle });

    cursor.forEach((doc) => {
      const { amt, litres } = doc;
      db.collection("vehicles").updateOne(
        { vehicle: vehicle },
        {
          $set: {
            amt: parseFloat(amt) + parseFloat(price),
            litres: parseFloat(litres) + parseFloat(lit),
          },
        }
      );
    });
  });
};

module.exports = router;
