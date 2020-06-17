const spiritAnimal = ["The fullmoon wolf", "Boring Chicken", " Lazy Lama", "Firceless Tiger", "Laughing Monkey", "Cute Cat", "A protector Dog", "Jungle big mouth Elephant", "Linked to creation Snake", "Dont judge me Rat", "Beautiful Dolphin", "Dont excit Dragon", "Explorer of the unknown Panther", "leopard", "Crezy and sharp Eagle", "Peace Dove", "Unfiend Unicorn", "Bring joy Butterfly", "King of water Starfish", "Dont look at me Tuna"];
const buttonElement = document.getElementById('displayButton');

function setRandomName() {
    const randomNumber = Math.floor(Math.random() * spiritAnimal.length);
    console.log(randomNumber);
    const randomElement = spiritAnimal[randomNumber];
    console.log(randomElement);
    var name = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = name + " " + randomElement;
    return name;
}

if (buttonElement) {
    buttonElement.addEventListener("click", myFunction);
}

function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
    setRandomName();
}