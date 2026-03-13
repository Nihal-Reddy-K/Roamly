const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const User = require("../models/user.js");

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Roamly");
}

const initDB = async () => {
  await Review.deleteMany({});
  await Listing.deleteMany({});

  const user = await User.findOne();

  if (!user) {
    console.log("No user found. Please sign up first, then run the seed script again.");
    mongoose.connection.close();
    return;
  }

  const listingsWithOwner = initData.data.map((obj) => ({
    ...obj,
    owner: user._id,
  }));

  await Listing.insertMany(listingsWithOwner);

  console.log("Database reinitialized successfully!");
  mongoose.connection.close();
};

initDB();