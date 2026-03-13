const mongoose = require("mongoose");
const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

require("dotenv").config();

const mapToken = process.env.MAP_TOKEN;

const geocodingClient = mbxGeocoding({
  accessToken: mapToken
});

mongoose.connect("mongodb://127.0.0.1:27017/Roamly");

async function updateListings() {
  const listings = await Listing.find({ geometry: { $exists: false } });

  for (let listing of listings) {
    try {
      let response = await geocodingClient.forwardGeocode({
        query: listing.location,
        limit: 1
      }).send();

      listing.geometry = response.body.features[0].geometry;
      await listing.save();

      console.log("Updated:", listing.title);
    } catch (err) {
      console.log("Error with:", listing.title);
    }
  }

  console.log("All listings updated!");
  mongoose.connection.close();
}

updateListings();