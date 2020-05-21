//calculating the dog age//

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const humanYear = dogYearFuture - dogYearOfBirth;

// js Boolean //
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears == false) {
    console.log(" Your dog will be " + humanYear + " human years old in " + dogYearFuture)
} else {
    console.log(" Your dog will be " + humanYear * 7 + " dog years old in " + dogYearFuture)
}