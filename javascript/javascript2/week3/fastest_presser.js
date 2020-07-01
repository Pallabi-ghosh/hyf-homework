function myFunction() {
    // Get the value of input field with id="numb"
    val = document.getElementById("integer").value;

    // If x is Not a Number or less than one or greater than 10

    if (isNaN(val) || val < 1 || val > 100) {

    } else {

    }
};

const count = 0;
const btnStart = document.getElementById("start")

btnStart.addEventListener("click", function() {
    setTimeout(function() {
        count += 1
    }, 1000)
})