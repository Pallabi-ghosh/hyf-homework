const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

const findShortestWordAmongMixedElements = array => {
    let shortest = '';

    for (let element of array) {
        if (typeof element === 'string' &&
            (shortest === '' || element.length < shortest.length)) {
            shortest = element;
        }
    }

    return shortest;
};



console.log(findShortestWordAmongMixedElements(danishWords)); // returns 'ø'