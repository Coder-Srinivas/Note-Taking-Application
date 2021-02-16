const fs = require('fs')

const loadNotes = () => {
    const notes = fs.readFileSync("notes.json");
    if(notes.length == 0)return []
    return JSON.parse(notes);
}

module.exports = loadNotes
