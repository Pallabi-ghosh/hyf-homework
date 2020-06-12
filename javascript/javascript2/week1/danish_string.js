const danishString = ['Jeg har en blå bil'];
//notThisFunctionName(danishString); // returns {total: 1, å: 1}

var position = getbirdposition(danishString);

function getbirdposition(danishString) {
    var positionOfTheblå;
    for (i = 0; i < danishString.length; i++) {
        if (danishString[i] == 'blå') {
            positionOfTheblå = i;
            i = danishString.length;
        }

    }
    return positionOfTheblå;
}
console.log(position);






const danishString2 = ['Blå grød med røde bær'];
//notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

// console.log(danishString2.length);
// danishString2.forEach((number, i) => console.log(`${number} is at index ${i}`));