const express = require("express");
const app = express();
const port = 3001;

app.get("/", (request, response) => {
  response.send("Example app listening on port 3001!");
});

/*
GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).
GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).
Example: going to localhost:3000/numbers/add?first=3&second=7 should respond with 10
Hints:
Find express documentation online.
Use req.query and req.params properties on req object.
*/

//USing req.Query
app.get("/numbers/add", (request, response) => {
  const theSum =
    Number(request.query.firstNumber) + Number(request.query.secondNumber);
  if (request.query.firstNumber && request.query.secondNumber) {
    response.send(`Input a number`);
  } else {
    response.send(`the answer is ${theSum}`);
  }
});

app.get("/numbers/multiply", (request, response) => {
  const multiplication =
    Number(request.query.firstNumber) * Number(request.query.secondNumber);
  if (request.query.firstNumber && request.query.secondNumber) {
    response.send(`Input a number`);
  } else {
    response.send(`the answer is ${multiplication}`);
  }
});

//Using req.params
app.get("/numbers/multiply/:firstNumber/:secondNumber", (request, response) => {
  const multiply =
    Number(request.params.firstNumber) * Number(request.params.secondNumber);
  if (firstNumber && secondNumber) {
    response.send(`Input a number`);
  } else {
    response.send(`the answer is ${multiply}`);
  }
});

app.listen(port, () => {
  console.log("Example app listening on port 3001!");
});
