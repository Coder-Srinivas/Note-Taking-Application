
const loadNotes = require('./loadNotes')
const saveNotes = require('./saveNotes')

const addNote = (title, desc) => {
    const notes = loadNotes()
    const contains = notes.some(note => note.title == title);

    if(contains){
        return "Error Note title taken";
    }

    else notes.push({
        title,
        desc
    })

    saveNotes(notes)
    return "Notes saved successfully";
}

module.exports = addNote
