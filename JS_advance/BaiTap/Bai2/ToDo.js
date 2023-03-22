"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo(title, content, completed, day) {
        this.TodoObj = { title: title, content: content, completed: completed, day: day };
    }
    Todo.prototype.getDate = function () {
        return this.TodoObj.day;
    };
    Todo.prototype.toString = function () {
        return "\n      Title : ".concat(this.TodoObj.title, ",\n      Content : ").concat(this.TodoObj.content, ",\n      Completed : ").concat(this.TodoObj.completed, ",\n      Day: ").concat(this.TodoObj.day, "\n    ");
    };
    return Todo;
}());
exports["default"] = Todo;
