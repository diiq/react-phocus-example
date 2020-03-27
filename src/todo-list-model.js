import { action, computed, observable, decorate } from "mobx";

export class TodoItem {
  status = "todo";
  name = "";
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  start() {
    this.status = "started";
  }

  finish() {
    this.status = "finished";
  }
}

decorate(TodoItem, {
  status: observable,
  name: observable,
  start: action,
  finish: action
});

export class TodoListClass {
  maxId = 0;
  itemById = {};

  get items() {
    return Object.keys(this.itemById).map(k => this.itemById[k]);
  }

  remove(id) {
    delete this.itemById[id];
  }

  add(name) {
    this.maxId++;
    this.itemById[this.maxId] = new TodoItem(name, this.maxId);
  }
}
decorate(TodoListClass, {
  itemById: observable,
  name: observable,
  remove: action,
  items: computed,
  add: action
});

export const TodoList = new TodoListClass();
TodoList.add("Eat a cheese");
TodoList.add("Sing about sixpence");
TodoList.add("Go forth, or fifth");
