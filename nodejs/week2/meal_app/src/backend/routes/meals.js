// Respond with the json for the meal with the corresponding id
// Respond with the json for all the meals
const express = require("express");
const app = express.Router();


const meal = require("../data/meals.json");


router.get("/", (request, response) => {
    response.send(meals);
});

router.get("/:id", (request, response) => {
    const mealId = Number(request.params.id);
    const mealsWithId = meals.filter(
        (meal) => meal.id === mealId
    );
    response.send(mealsWithId);
});



// Get meals that has a price smaller than maxPrice
if (request.query.maxPrice) {
    const maxPrice = request.query.maxPrice;
    const mealsMaxPrice = meals.filter(
        (meal) => meal.price < maxPrice
    );
    response.json(mealsMaxPrice);
}


// title --Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
const word = "Rød grød med";

function findWord(word, str) {
    return str.split(' ').some(function(w) { return w === word })
}
console.log(findWord);



// createdAfter --Get meals that has been created after the date





// limit-- Only specific number of meals






module.exports = router;