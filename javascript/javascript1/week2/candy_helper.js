const broughtCandyPrices = [];
const spendingamount = Math.random() * 100;

function addCandy(candyType, weight) {
    if (candyType === "Sweet") {
        candyPrice = 0.5 * weight;
        broughtCandyPrices.push(candyPrice);
    } else if (candyType === "Chocolate") {
        candyPrice = 0.7 * weight;
        broughtCandyPrices.push(candyPrice);
    } else if (candyType === "Toffee") {
        candyPrice = 1.1 * weight;
        broughtCandyPrices.push(candyPrice);
    } else if (candyType === "Chewing-Gum") {
        candyPrice = 0.3 * weight;
        broughtCandyPrices.push(candyPrice);
    } else {
        console.log("You cannnot buy this candy");
    }
}
console.log(addCandy());
console.log(spendingamount);