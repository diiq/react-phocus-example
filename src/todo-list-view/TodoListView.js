import React, { Component } from "react";
import { PhocusContext, Action, ActionContextService } from "react-phocus";
import { observer } from "mobx-react";

import { TodoItemView } from "../todo-item-view/TodoItemView";
import { TodoList } from "../todo-list-model";

import "./todo-list-view.css";

ActionContextService.addContext("todo-list", {
  actions: {
    add: new Action({
      name: "Add Todo",
      defaultKeys: ["Alt+n"],
      actOn: c => {
        c.focusTodoName();
      }
    })
  }
});

ActionContextService.addContext("todo-item-form", {
  actions: {
    add: new Action({
      name: "Add Todo",
      defaultKeys: ["Enter"],
      actOn: c => {
        TodoList.add(c.newTodoName());
        c.clearTodoName();
      }
    })
  }
});

export const TodoListView = observer(
  class TodoListView extends Component {
    newTodoInput = React.createRef();

    newTodoName() {
      return this.newTodoInput.current.value;
    }

    clearTodoName() {
      return (this.newTodoInput.current.value = "");
    }

    focusTodoName() {
      this.newTodoInput.current.focus();
    }

    render() {
      return (
        <PhocusContext className="todo-list-view" argument={this} context="todo-list">
          <div className="active">Example has focus</div>
          <ul className="list">
            {TodoList.items.map(item => (
              <TodoItemView item={item} key={item.id} />
            ))}
          </ul>

          <PhocusContext
            context="todo-item-form"
            argument={this}
            className="new-item-form"
          >
            <input type="text" ref={this.newTodoInput} />
            <button data-phocus-action="add" />
          </PhocusContext>
        </PhocusContext>
      );
    }
  }
);
