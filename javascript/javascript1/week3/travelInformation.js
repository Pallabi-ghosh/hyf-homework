const travelInformation = {
    speed: 33,
    destinationDistance: 432,
};

function travelFunction(travelInformation) {
    const speedInMinute = travelInformation["speed"] / 60
    const time = Math.floor(travelInformation["destinationDistance"] / speedInMinute)
    const minutes = time % 60
    const totalHour = (time - minutes) / 60
    return (totalHour + " hours and " + minutes + " minutes");


}
const travelTime = travelFunction(travelInformation);

console.log(travelTime); // 8 hours and 64 minutes