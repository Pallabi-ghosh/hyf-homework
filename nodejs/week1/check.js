const array = [{ "a": 1 }, { "b": 2 }, { "c": 3 }]
console.log(array)


const newArray = array.map(o => o["x"] = 5)
console.log(newArray);