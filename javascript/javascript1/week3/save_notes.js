const notes = [];

function saveNotes(content, id) {
    notes.push({ content: content, id: id });
}
saveNotes('shopping facewash', 1);
saveNotes('pick up something', 2);
saveNotes('pick up a dress', 3);
saveNotes('food items', 4);

console.log(notes);

function getNote(id) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            return notes[i];
        }
    }
}

const firstNote = getNote(4);

console.log(firstNote)

function logOutNotesFormatted(k, j) {
    for (i = 0; i < notes.length; i++)
        console.log('The note with id:' + notes[i].id + ', has the following note text:' + notes[i].content)
}

logOutNotesFormatted(notes);