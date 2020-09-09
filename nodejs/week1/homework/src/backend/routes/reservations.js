// Respond with the json for all reservations
const express = require("express");
const router = express.Router();


const meal = require("../data/meals.json");
const mealReview = require("../data/reviews.json");
const reservation = require("../data/reservations.json");


router.get("/", (request, response) => response.send(reservation));


module.exports = router;