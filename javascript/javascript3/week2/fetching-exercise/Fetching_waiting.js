console.log("script loaded");

new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("Whoops!");
    }, 3000);
})

fetch("http://api.open-notify.org/astros.json")
    // .then below runs when the remote server responds
    .then(function(response) {
        // response.text() returns a new promise that resolves with the full response text
        // when it loads
        return response.text();
    })
    .then(function(text) {
        alert(text);
    });


// async way
async function getData() {
    try {
        const response = await fetch("http://api.open-notify.org/astros.json");
        const stringify = await response.json();
        console.log(stringify)
    } catch (error) {
        console.log((error))
    }
}
getData()