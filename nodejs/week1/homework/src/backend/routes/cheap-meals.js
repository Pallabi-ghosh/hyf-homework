// Respond with the json for all the meals (including it's reviews) that are cheap (you define what a cheap meal is)
const express = require("express");
const app = express();



const meal = require("../data/meals.json");
const mealReview = require("../data/reviews.json");


const cheapMeals = meal.filter(meal => meal.price < 100);
cheapMeals.map(everymeal => {
    everymeal.reviews = mealReview.filter(review => review.mealId === everymeal.id);
    return everymeal;
});


app.get("/cheap-meals", (request, response) => {
    response.send(cheapMeals);
});

module.exports = app;