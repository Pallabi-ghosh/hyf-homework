//Question 7 - Create a function called runAfterDelay
const delayButton = document.querySelector("button")

function runAfterDelay(delay, callback) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

runAfterDelay(4, function() {
    console.log('should be longer than 4 seconds')
})

// Question 8 - Check if we have double clicked on the page
document.getElementById('button').addEventListener('click', function(e) {
    e.preventDefault();
    this.style.background = 'red';
    this.innerText = "you clicked me";
}, false);
document.getElementById('button').addEventListener('dblclick', function() {
    this.style.background = 'green';
    console.log("double clicked")
}, false);