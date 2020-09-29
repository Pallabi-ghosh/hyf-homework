const express = require("express");
const app = express();
var PORT = 3002;

function Circle(radius) {
  this.radius = radius;
  // getArea method
  this.area = function () {
    return Math.PI * this.radius * this.radius;
  };
  // getDiameter method
  this.getDiameter = function () {
    return 2 * Math.PI * this.radius;
  };
}

const c = new Circle(3);
var circumferenceOfCircle = 2 * Math.PI * ("Area =", c.area().toFixed(2));
console.log("Area =", c.area().toFixed(2));
console.log("Diameter =", c.getDiameter().toFixed(2));
console.log("Circumference of circle is: " + circumferenceOfCircle);

var operator = req.params.operator;
var num1 = parseInt(req.query.num1);
var num2 = parseInt(req.query.num2);
var result;

switch (operator) {
  case "addition":
    result = add(num1, num2);
    break;

  case "subtraction":
    result = subtract(num1, num2);
    break;

  case "multiplication":
    result = multiply(num1, num2);
    break;

  case "division":
    result = divide(num1, num2);
    break;

  default:
    result = "Sorry, please enter a valid operator!";
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

app.get("/", function (request, respond) {
  respond.send("hello! please type some math y'all");
  request.json(result);
});

//listener
app.listen(PORT, function () {
  console.log("Example app listening on port 3002!");
});
