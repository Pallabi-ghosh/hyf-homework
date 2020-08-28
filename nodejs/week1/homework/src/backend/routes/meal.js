// Respond with the json for a random meal (including it's reviews)
const express = require("express");
const app = express();


const meal = require("../data/meals.json");
const mealReview = require("../data/reviews.json");

const totalMeal = meal.forEach(everymeal => {
    everymeal.reviews = mealReview.filter(review => review.mealId === everymeal.id);
    return everymeal;
});

app.get("/meal", (request, response) => {
    response.send(totalMeal);
});


module.exports = app;