//Warm up One (logOut a text after 2.5 seconds)
const logout = function() {
    setTimeout(() => { console.log('called after 2.5 seconds') }, 2500)
};
logout();



//Warm up TWo (Function that takes two parameters delay & string to log)
function delayStringOutput(delay, stringToLog) {
    setTimeout(() => { console.log(`${stringToLog}`) }, delay * 1000)
}

delayStringOutput(5, `This logs after 5 seconds`)
delayStringOutput(3, `This logs after 3 seconds`)