// const app = require("./app");

// app.listen(3000, () => {
//     console.log("Example app listening on port 3000!");
// });

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (request, response) => response.send("Hello world"));

app.listen(port, () => console.log(`Example app listening on port ${port}`));