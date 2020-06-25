//FUNCTIONS AS VARIABLES

//Calling functions in an array
const arrayOfFunctions = [

    function func1() {
        console.log('I am array function one')
    },

    function functionTwo() {
        console.log("Hello!");
    },

    function func3() {
        console.log('Hello world!')
    }
]

arrayOfFunctions.forEach(logfunction => logfunction())