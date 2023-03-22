"use strict";
exports.__esModule = true;
var NoteList = /** @class */ (function () {
    function NoteList() {
        this.noteList = [];
    }
    NoteList.prototype.addNoteToList = function (note) {
        this.noteList.push(note);
    };
    NoteList.prototype.getNoteList = function () {
        return this.noteList;
    };
    return NoteList;
}());
exports["default"] = NoteList;
