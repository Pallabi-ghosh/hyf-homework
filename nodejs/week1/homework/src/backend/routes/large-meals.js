// Respond with the json for all the meals (including it's reviews) that can fit lots of people
const express = require("express");
const router = express.Router();


const meal = require("../data/meals.json");
const mealReview = require("../data/reviews.json");

const largeMeals = meal.filter(meal => meal.maxNumberOfGuests >= 5);
largeMeals.forEach(everymeal => {
    everymeal.reviews = mealReview.filter(review => review.mealId === everymeal.id);
});

router.get("/", (request, response) => response.send(largeMeals));


module.exports = router;