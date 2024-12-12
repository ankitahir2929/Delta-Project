const express = require("express");
const router = express.Router({mergeParams: true});
const Reviews = require("../models/reviews.js");
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

//Post Route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//Delete Route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.deleteReview));

module.exports = router;