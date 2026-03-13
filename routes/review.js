const express = require("express");
const router = express.Router({mergeParams: true});
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema,reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");
const {validateReview,isLoggedIn,isAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");
const review = require("../models/review.js");

//POST route for reviews
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//Delete Route for Reviews
router.delete("/:reviewId",isLoggedIn,isAuthor,wrapAsync(reviewController.delete));

module.exports = router;