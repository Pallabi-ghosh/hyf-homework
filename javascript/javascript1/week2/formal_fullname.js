const namethatIwant = getFullname('Benjamin', 'Hughes', true);

function getFullname(firstName, lastName, formalFullName) {
    if (formalFullName == true) {
        return ("loard" + " " + firstName + " " + lastName);
    } else if (formalFullName == false) {
        return (firstName + " " + lastName);
    }

}

//prints loard Benjamin Hughes
console.log(namethatIwant);