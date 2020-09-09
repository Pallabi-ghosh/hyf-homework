// Respond with the json for a random meal (including it's reviews)
const express = require("express");
const router = express.Router();

const meal = require("../data/meals.json");
const mealReview = require("../data/reviews.json");

const totalMeal = meal.map(everymeal => {
    everymeal.reviews = mealReview.filter(review => review.mealId === everymeal.id);
    return everymeal;
});

router.get("/", (request, response) => response.send(totalMeal));


module.exports = router;