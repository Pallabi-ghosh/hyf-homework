var element = document.createElement("button");
element.appendChild(document.createTextNode("Click here"));
var page = document.getElementById("btn");
page.appendChild(element);
page.addEventListener("click", onload, true);
const imageField = document.querySelector(".image-field")
const searchButton = document.querySelector(".btn")


function onload() {
    loc = document.getElementById("recomendationInput");
    fetch("https://api.giphy.com/v1/gifs/search?q=" + loc.value + "&api_key=dc6zaTOxFJmzC")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
}


function gotData(giphy) {
    for (var i = 0; i < giphy.data.length; i++) {
        createImg(giphy.data[i].images.original.url);
    }
    forEach(imagesPreview => {
        const createImageTag = document.createElement("img")
        createImageTag.setAttribute("src", imagesPreview);
        imageField.appendChild(createImageTag)
    })
}
searchButton.addEventListener("click", searchGiphy)