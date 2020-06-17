const danishString1 = ['Jeg har en blå bil'];
//notThisFunctionName(danishString); // returns {total: 1, å: 1}

const danishString2 = ['Blå grød med røde bær'];
//notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

function danishLetters(array) {
    let alpha1 = 0; //to count æ
    let alpha2 = 0; //to count ø
    let alpha3 = 0; //to count å
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'æ') {
            alpha1++;
        } else if (array[i] === 'ø') {
            alpha2++;
        } else if (array[i] === 'å') {
            alpha3++;
        }
    }
    console.log(array);
    console.log(
        'total: ' +
        (alpha1 + alpha2 + alpha3) +
        ', æ: ' +
        alpha1 +
        ' , ø: ' +
        alpha2 +
        ' , å: ' +
        alpha3
    );
} // returns {total: 4, æ: 1, ø: 2, å: 1}
console.log(danishLetters(danishString1));
console.log(danishLetters(danishString2));



const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function findShortestWord() {

    let shortestWords = undefined;

    if (danishWords.length > 0) {

        for (let i = 0; i < danishWords.length; i++) {

            if (shortestWords == undefined || danishWords[i].length < shortestWords.length) {
                shortestWords = danishWords[i];
            }
        }
        return shortestWords;
    }

    console.log(shortestWords);

}