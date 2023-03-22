type TodoObj = {
  title: string, 
  content: string, 
  day: string,
  completed: boolean,
}

export default class Todo {
  private TodoObj: TodoObj;

  constructor(title: string, content: string, completed: boolean, day: string) {
    this.TodoObj = {title, content, completed, day};
  }

  getDate(): string {
    return this.TodoObj.day;
  }

  toString(): string {
    return `
      Title : ${this.TodoObj.title},
      Content : ${this.TodoObj.content},
      Completed : ${this.TodoObj.completed},
      Day: ${this.TodoObj.day}
    `;
  }
}