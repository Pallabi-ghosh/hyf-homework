//calculating the dog age//

let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let humanYear = dogYearFuture - dogYearOfBirth;

// js Boolean //
let shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears == false) {
    console.log(" Your dog will be ".concat(humanYear).concat(" human years old in ").concat(dogYearFuture))
} else {
    console.log(" Your dog will be ".concat(humanYear * 7).concat(" dog years old in ").concat(dogYearFuture))
}