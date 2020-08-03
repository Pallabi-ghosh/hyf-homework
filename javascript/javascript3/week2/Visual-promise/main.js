const targets = document.querySelectorAll('li');

const redBox = document.querySelector("ul.marks li:nth-child(1) ");
const blueBox = document.querySelector("ul.marks li:nth-child(2) ");
const greenBox = document.querySelector("ul.marks li:nth-child(3) ");

function translateOneByOne() {

    moveElement(redBox, { x: 20, y: 300 })
        .then(() => {
            console.log('Red element has been moved');
            moveElement(blueBox, { x: 400, y: 300 })
        })
        .then(() => {
            console.log('Blue element has been moved');
            moveElement(greenBox, { x: 400, y: 20 })
        })
        .then(() => {
            console.log('Blue element has been moved');
        })
}
translateOneByOne();