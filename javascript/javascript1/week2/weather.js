const temperature = getsummerClothesToweare(18);



function getsummerClothesToweare(temperature) {

    if (temperature >= 18 && temperature <= 25) {
        return ("shorts and a t-shirt")
    } else if (temperature > 18 && temperature < 25) {
        return ("skirts and tops")
    } else(temperature < 35); {
        return ("dress and bag")
    }
}

console.log(getsummerClothesToweare(18));