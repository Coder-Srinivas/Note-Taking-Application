const fs = require('fs');
const addNote = require('./utils/addNotes');
const removeNote = require('./utils/removeNotes');
const loadNotes = require('./utils/loadNotes');
const removeAll = require('./utils/removeAllNotes');

console.log("Initial Notes")
console.log(loadNotes());

console.log("After adding notes")
console.log(loadNotes());

console.log(removeAll())
console.log("After Removal")
console.log(loadNotes())


// fs.appendFileSync("notes.json", JSON.stringify(hello));