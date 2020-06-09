function simpleMatha(a, b) {
    console.log(a + b)
}
simpleMatha(3, 3)

function simpleMultiplication(c, d) {
    console.log(c * d)
}
simpleMultiplication(4, 12)


var date = new Date();
console.log(date.toLocaleDateString('en-US'));






function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


function getReply(question) {
    switch (question) {
        case "Hello My Name is Benjamin":
            console.log("Nice to meet you");
            break;
        case "What is my name":
            console.log("Your name is Benjamin");
            break;
    }
}
getReply("This entry is a new question");





var dateTimer = new Date();
console.log(dateTimer);
dateTimer.setMinutes(dateTimer.getMinutes() + 4);
console.log(dateTimer.getMinutes())

var x = setInterval(function() {

        // Get today's date and time
        var date = new Date(); //4 minutes into seconds
        var now = date.getTime();
        var distance = dateTimer - now;

        // Time calculations for minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result 
        console.log(minutes + "m " + seconds + "s ");

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            console.log("Timer done");
        }
    }, 1000) // 1000 is miliseconds


let todoItems = [];
addTodo("Go Fishing");
addTodo("singing in the shower")

function addTodo(text) {
    const todo = {
        task: text,
        checked: false,
        id: Date.now(),
    };

    todoItems.push(todo);
    console.log(todoItems);
}