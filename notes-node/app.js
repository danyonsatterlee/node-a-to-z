
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');
const title = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const body ={
    describe: 'body of note',
    demand: true,
    alias: 'b'
};
const argv = yargs
    .command('add', 'Add a new note', {
        title,
        body

    })
    .command('list', 'list all notes')
    .command('read', 'get one note and read it',{title})
    .command('remove', "remove a note", {title})
        .help()
        .argv;
var command = process.argv[2];


if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log("note created");
       notes.logNotes(note);
    } else{
        console.log("title already taken");
    }
} 
else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note)=> notes.logNotes(note));
;} 
else if (command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log("you grabbed one note to read");
        notes.logNotes(note);
    } else{
        console.log("sorry, the note you're looking for was not found. Try creating a new note instead. ");
    }
} 
else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "your note was removed" : "note does not exist";
    console.log(message);
}
else{
    console.log('not reconized');
}


