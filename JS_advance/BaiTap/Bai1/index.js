"use strict";
exports.__esModule = true;
var Note_1 = require("./Note");
var NoteList_1 = require("./NoteList");
var note_1 = Note_1["default"].addNote('note_1', 'bla');
var noteList = new NoteList_1["default"]();
noteList.addNoteToList(note_1);
console.log(noteList.getNoteList());
