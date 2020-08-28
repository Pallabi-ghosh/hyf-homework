const express = require("express");
const app = express();

// import data here
//const meals = require("./data/meals");

// Respond with the json for all the meals. For each meal, if there are reviews matching it's meal ID, add these reviews to each meal in the form of an array. For meals that do not have any reviews, the "reviews" property will be an empty array. (watch the GIF below to understand how it should be structured)
app.get("/", async(request, response) => {
    response.send("Meal Sharing Web App");
});
// Respond with the json for all the meals.
const mealsRouter = require("./routes/meals.js");
app.get("/meals", mealsRouter);
// Respond with the json for all the meals (including it's reviews) that are cheap (you define what a cheap meal is)
const cheapMealsRouter = require("./routes/cheap-meals.js");
app.get("/cheap-meals", cheapMealsRouter);
// Respond with the json for all the meals (including it's reviews) that can fit lots of people
const largeMealsRouter = require("./routes/large-meals.js");
app.get("/large-meals", largeMealsRouter);
// Respond with the json for a random meal (including it's reviews)
const mealRouter = require("./routes/meal.js");
app.get("/meal", mealRouter);
// Respond with the json for all reservations
const reservationsmealsRouter = require("./routes/reservations.js");
app.get("/reservations", reservationsmealsRouter);
// Respond with the json for a random reservation
const reservationMealsRouter = require("./routes/reservation.js");
app.get("/reservation", reservationMealsRouter);


module.exports = app;