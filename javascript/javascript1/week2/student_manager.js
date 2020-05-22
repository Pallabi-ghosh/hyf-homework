const class07Students = new Array();



//var totalStudents = addStudentToClass("ARNAB");
//console.log("This variable holds -> " + totalStudents);
//addStudentToClass("PALLABI");

function addStudentToClass(actualStudentName) {
    if (actualStudentName == "QueenofDenmark") {
        class07Students.push(actualStudentName)
        console.log("1st pos:" + class07Students)
        return ("you can always add QD")

    } else if (class07Students.length > 5) {
        return ("Cannot add more students to class 07")
    }
    if (actualStudentName != ("")) {
        for (i = 0; i < class07Students.length; i++) {
            if (class07Students[i] == actualStudentName) {
                return (actualStudentName + " is alrady there")
            }
        }
        class07Students.push(actualStudentName)
        console.log("The array class07Students holds- >" + class07Students)
        return ("student can be allowed")
    }




}

function getNumberOfStudents() {
    return class07Students.length
}