const notes = [];

saveNotes('shopping facewash', 1);
saveNotes('pick up something', 2);
saveNotes('pick up a dress', 3);
saveNotes('food items', 4);


function saveNotes(k, j) {
    var myObject = {
        content: k,
        id: j
    }
    notes.push(myObject)
}
console.log(notes);

function getNote(id) {
    var i = id - 1;
    console.log(notes[i])
}

const firstNote = getNote(4);

function logOutNotesFormatted(k, j) {
    for (i = 0; i < notes.length; i++)
        console.log('The note with id:' + notes[i].id + ', has the following note text:' + notes[i].content)
}

logOutNotesFormatted(notes);