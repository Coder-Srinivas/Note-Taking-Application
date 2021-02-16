const fs = require('fs')

const saveNotes = (notes) =>{
    fs.writeFileSync("notes.json", JSON.stringify(notes));
}

module.exports = saveNotes