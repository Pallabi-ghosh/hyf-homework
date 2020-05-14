var width = 8;
var depth = 10;
var height = 10;
var gardenSizeInM2 = 100;
const exactPrice = 2500000;
var volumeInMeters = width * height * depth;

housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300

if (exactPrice > housePrice) {
    console.log(" Peter is paying more than exactprice")
} else {
    console.log(" Peter is paying less than exact house price")
}

width = 5;
depth = 11;
height = 8;
gardenSizeInM2 = 70;
const exactHousePrice2 = 1000000;
var volumeInMeters = width * height * depth;

housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300

if (exactHousePrice2 > housePrice) {
    console.log(" Julia is paying more than exact house price")
} else {
    console.log(" Julia is paying less than exact house price")
}