// Respond with the json for a random reservation
const express = require("express");
const app = express();


const reservation = require("../data/reservations.json");


const randomNumber = Math.floor(Math.random() * Math.floor(4)) + 1;
const randomReservation = reservation.find(r => r.id === randomNumber);


app.get("/reservation", (request, response) => {
    response.send(randomReservation);
});


module.exports = app;