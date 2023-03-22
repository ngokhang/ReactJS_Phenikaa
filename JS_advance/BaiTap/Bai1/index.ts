import Note from "./Note";
import NoteList from "./NoteList";

let note_1 = Note.addNote('note_1', 'bla');
let noteList = new NoteList();
noteList.addNoteToList(note_1);
console.log(noteList.getNoteList());