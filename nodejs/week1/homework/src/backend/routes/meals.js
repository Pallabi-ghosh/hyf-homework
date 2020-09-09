// Respond with the json for all the meals. For each meal, if there are reviews matching it's meal ID, add these reviews to each meal in the form of an array. For meals that do not have any reviews, the "reviews" property will be an empty array. (watch the GIF below to understand how it should be structured)
const express = require("express");
const router = express.Router();


const meal = require("../data/meals.json");
const mealReview = require("../data/reviews.json");

const meals = meal.map(everymeal => {
    everymeal.reviews = mealReview.filter(review => review.mealId === everymeal.id);
    return everymeal;
});

router.get("/", async(request, response) => response.send(meals));

module.exports = router;