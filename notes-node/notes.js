console.log('Starting notes.js');

const fs = require('fs');


var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync('notes-data2.json');
        return JSON.parse(notesString);   
    } catch(e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data2.json', JSON.stringify(notes));
};


var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note)=> note.title === title);

   if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
   }
   
};





var getAll = () => {
    return fetchNotes()
};

var getNote = (title) => {
    var notes = fetchNotes();
    var specificNote = notes.filter((note)=> {
       return note.title === title
  
    });
    return specificNote[0];
    
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var matchNote = notes.filter((note)=> note.title !== title);
    saveNotes(matchNote);
    return notes.length !== matchNote.length;
};

var logNotes = (note) =>{
    console.log("--");
    console.log(`Title:  ${note.title}`);
    console.log(`Body:  ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNotes
};