function funcA() {
    return 'I have eaten bread';
}
console.log(funcA())

const students = [
    { name: 'Fowad', age: 32 },
    { name: 'Emil', age: 25, teacher: true },
    { name: 'Zoey', age: 28 }
]

console.log(students)

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];



function addproperty(choices) {
    var i = 0;
    while (i < choices.length) {
        var obj = choices[i]
        obj["userAnswer"] = null
        i++
    }
    return choices;

}
console.log(addproperty(questions))