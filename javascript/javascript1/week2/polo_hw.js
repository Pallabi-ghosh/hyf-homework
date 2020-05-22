const birdNames = ['sparrow', 'crow', 'dove', 'parrot']
const birdColors = ['brown', 'black', 'white', 'green'];


//remember that below is the function declaration , so birdName is the parameter that you will use inside the fucntion
function getBirdColorWithWhileLoop(birdNames) {
    let n = 0;
    var positionofbird;
    let i = 0;
    while (n < birdNames.length) {
        if (birdNames[i] == birdNames) {
            positionofbird = i;
            i = birdNames.length; // tell me why this step is needed ??
        }
        n++;
    }

    return crowColor;
}

// Find the color of the crow by using this below function. Use For Loop
var dovePosition = getbirdposition(birdNames);

//remember that below is the function declaration , so birdName is the parameter that you will use inside the fucntion
// getbirdposition- is the functioncll.
function getbirdposition(birdN) { // birdN- is the parameter.
    var positionofbird;
    for (i = 0; i < birdN.length; i++) {
        if (birdN[i] == 'dove') {
            positionofbird = i;
            i = birdN.length; // tell me why this step is needed ??
        }

    }
    return positionofbird;
}
console.log(dovePosition);


// Find the color of the crow by using this below function. Use While Loop
var doveColor = getbirdcolor(birdColors);

function getbirdcolor(birdC) {

    return birdC[dovePosition];
}
console.log(doveColor);