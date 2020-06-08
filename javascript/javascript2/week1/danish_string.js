const danishString = ['Jeg har en blå bil'];
//notThisFunctionName(danishString); // returns {total: 1, å: 1}

function findShortestWord(str) {
    var words = str.split(' ');
    var shortest = words.reduce((shortestWord, currentWord) => {
        return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    return shortest;
}
console.log(findShortestWord(danishString));





const danishString2 = ['Blå grød med røde bær'];
//notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

function findShortestWord(str) {
    var words = str.split(' ');
    var shortest = words.reduce((shortestWord, currentWord) => {
        return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    return shortest;
}
console.log(findShortestWord(danishString2));