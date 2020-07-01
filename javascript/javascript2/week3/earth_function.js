//Warm up Three (the function you created in the previous task to log out the text)
const button = document.querySelector("btn")

setTimeout(function() {
    console.log("This button was clicked after 5 seconds")
}, 5000);


//Question 4 - Create two functions and assign them to two different variables.
const earthFunction1 = () => { console.log("Earth"); };
const saturnFunction = () => { console.log("Saturn"); };

function planetFunction(callback) {
    callback();
}
planetFunction(earthFunction1);