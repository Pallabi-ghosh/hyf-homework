const broughtCandyPrices = [];
const spendingamount = Math.random() * 100;

function addCandy(candyType, weight) {
    if (candyType === "Sweet") {
        broughtCandyPrices.push(0.5 * weight);
    } else if (candyType === "Chocolate") {
        broughtCandyPrices.push(0.7 * weight);
    } else if (candyType === "Toffee") {
        broughtCandyPrices.push(1.1 * weight);
    } else if (candyType === "Chewing-Gum") {
        broughtCandyPrices.push(0.3 * weight);
    } else {
        console.log("You cannnot buy this candy");
    }
}
console.log(addCandy(candyType, weight));
console.log(spendingamount);