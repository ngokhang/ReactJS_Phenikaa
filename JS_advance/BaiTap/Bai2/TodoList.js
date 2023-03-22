"use strict";
exports.__esModule = true;
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.list = [];
    }
    TodoList.prototype.addTodo = function (todo) {
        if (this.list.some(function (e) { return e.getDate() === todo.getDate(); }))
            return;
        this.list.push(todo);
    };
    TodoList.prototype.getList = function () {
        return this.list;
    };
    return TodoList;
}());
exports["default"] = TodoList;
