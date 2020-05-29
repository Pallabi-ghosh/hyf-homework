const object = { 'a': 1, 'b': 2, 'c': 3, 'd': true };
showProps(object);

function showProps(obj) {
    var result = ``;
    for (var i in obj) {
        // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
        if (obj.hasOwnProperty('d')) {
            result += `${i} = ${obj[i]}\n`;
        }
    }
    return result;
}

var a = 'Arnab';
var b = 'Polo';
console.log(`${a} loves ${b}`);