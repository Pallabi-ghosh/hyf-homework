// Respond with the json for all reservations
const express = require("express");
const app = express();


const meal = require("../data/meals.json");
const mealReview = require("../data/reviews.json");
const reservation = require("../data/reservations.json");


app.get("/reservations", (request, response) => {
    response.send(reservation);
});


module.exports = app;