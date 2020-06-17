let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]


// filter
const evens = numbers.filter(function(item) {
    return item % 2 === 0
});
console.log(evens);


// sum
const sum = [1, 2, 3, 4].reduce(function(result, item) {
    return result + item;
}, 0);

console.log(sum);

// some
const hasNegativeNumber = [1, 2, 3, 4].some(function(item) {
    return item < 0;
});
console.log(hasNegativeNumber);

// map
const doubled = numbers.map(function(item) {
    return item * 2;
});

console.log(doubled);