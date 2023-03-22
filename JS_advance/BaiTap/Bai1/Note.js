"use strict";
exports.__esModule = true;
var Note = /** @class */ (function () {
    function Note(title, content) {
        this.title = title;
        this.content = content;
    }
    Note.addNote = function (title, content) {
        return new Note(title, content);
    };
    Note.prototype.toString = function () {
        return "\n      Title : ".concat(this.title, ".\n      Content : ").concat(this.content, "\n    ");
    };
    return Note;
}());
;
exports["default"] = Note;
