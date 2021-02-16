const loadNotes = require('./loadNotes')
const saveNotes = require('./saveNotes')

const removeNotes = (title) => {
    const notes = loadNotes();
    const index = notes.findIndex(note => note.title == title);

    if(index == undefined){
        return "No note found with the given title"
    }

    notes.splice(index,1);
    saveNotes(notes)

    return `Successfully removed notes ${title}`
}

module.exports = removeNotes