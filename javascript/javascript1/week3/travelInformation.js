const travelInformation = {
    speed: 33,
    destinationDistance: 432,
};

const travelTime = travelFunction(travelInformation);

function travelFunction(travelInformation) {
    var speedInMinute = travelInformation["speed"] / 60
    var time = Math.floor(travelInformation["destinationDistance"] / speedInMinute)
    var minutes = time % 60
    var totalHour = (time - minutes) / 60
    return (totalHour + " hours and " + minutes + " minutes");


}


console.log(travelTime); // 8 hours and 64 minutes