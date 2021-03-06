// Respond with the json for a random reservation
const express = require("express");
const router = express.Router();


const reservation = require("../data/reservations.json");


const randomNumber = Math.floor(Math.random() * Math.floor(4)) + 1;
const randomReservation = reservation.find(r => r.id === randomNumber);


router.get("/", (request, response) => response.send(randomReservation));


module.exports = router;