import Todo from "./ToDo";
import TodoList from "./TodoList";

const todo_1 = new Todo('Nau com', 'Nau comm', false, '3/18/2023');
const todo_2 = new Todo('Nau com', 'Nau comm', false, '3/19/2023');
let todoList = new TodoList();
todoList.addTodo(todo_1);
todoList.addTodo(todo_2);
console.log(todoList.getList());