const daysArray = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'); // this code is applicable for Day
const todaysDate = new Date()
const day1 = todaysDate.getDay(); //** this line is important

//console.log(day1); // expected output: 4

function remainder(addedTotalDays) {
    return addedTotalDays % 7;
}

function geteventweekday(daysToAddToTodaysDate) {
    //var answer = plusAnyDays(daysToAddToTodaysDate);
    var remainderForWeekCalculation = remainder(daysToAddToTodaysDate)
    var actualPositionOfEventDay = eventdayCalculation(remainderForWeekCalculation)
    console.log("this is the day position " + actualPositionOfEventDay);
    return daysArray[actualPositionOfEventDay];
}

function eventdayCalculation(remainingDays) {
    var positionOfEventDay = day1 + remainingDays;
    if (positionOfEventDay > 7) {
        return remainder(positionOfEventDay)
    } else if (positionOfEventDay == 7) {
        console.log("I think I need to do a small magic here to convert 7 to zero");
        return 0;
    }
    return positionOfEventDay;
}

console.log(geteventweekday(7004));