"use strict"

const loc;

var element = document.createElement("button");
element.appendChild(document.createTextNode("Click here"));
var page = document.getElementById("btn");
page.appendChild(element);
page.addEventListener("click", onload, false);

function onload() {
    loc = document.getElementById("recomendationInput");
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + loc.value + "&APPID=a56d332f49d2d3dfdd3f3443f04684f2")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
}