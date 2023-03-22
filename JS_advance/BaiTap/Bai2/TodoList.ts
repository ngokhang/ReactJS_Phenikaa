import Todo from "./ToDo";

export default class TodoList {
  private list: Todo[];

  constructor() {
    this.list = [];
  }

  addTodo(todo: Todo): void {
    if (this.list.some(e => e.getDate() === todo.getDate())) return;
    this.list.push(todo);
  }

  getList(): Todo[] {
    return this.list;
  }
}