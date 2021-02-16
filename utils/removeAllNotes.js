const fs = require('fs')
const loadNotes = require('./loadNotes');
const saveNotes = require('./saveNotes');

const removeAll = () => {
    let notes = loadNotes();
    notes = []
    saveNotes(notes)
    return "Successfully Removed All notes"
}

module.exports = removeAll