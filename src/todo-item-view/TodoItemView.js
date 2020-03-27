import React, { Component } from "react";
import {
  PhocusContext,
  PhocusButton,
  Action,
  ActionContextService
} from "react-phocus";
import { observer } from "mobx-react";
import { TodoList } from "../todo-list-model";
import "./todo-item-view.css";

ActionContextService.addContext("todo-item", {
  actions: {
    start: new Action({
      name: "Start",
      defaultKeys: ["s"],
      actOn: item => {
        item.start();
      }
    }),
    finish: new Action({
      name: "Finish",
      defaultKeys: ["f"],
      actOn: item => {
        item.finish();
      }
    }),
    delete: new Action({
      name: "Delete",
      defaultKeys: ["Backspace"],
      actOn: item => {
        const current = document.getElementById(`todo-item-${item.id}`);
        const previous = current.previousElementSibling;
        const next = current.nextElementSibling;
        if (previous) {
          previous.focus();
        } else if (next) {
          next.focus();
        } else {
          ActionContextService.triggerAction("add");
        }
        TodoList.remove(item.id);
      }
    }),
    next: new Action({
      name: "Next",
      defaultKeys: ["ArrowDown", "j"],
      actOn: item => {
        const current = document.getElementById(`todo-item-${item.id}`);
        const next = current.nextElementSibling;
        next && next.focus();
      }
    }),
    previous: new Action({
      name: "previous",
      defaultKeys: ["ArrowUp", "k"],
      actOn: item => {
        const current = document.getElementById(`todo-item-${item.id}`);
        const previous = current.previousElementSibling;
        previous && previous.focus();
      }
    })
  }
});

export const TodoItemView = observer(
  class TodoItemView extends Component {
    render() {
      const item = this.props.item;
      return (
        <PhocusContext
          context="todo-item"
          argument={item}
          tag="li"
          tabIndex="0"
          className={`todo-item ${item.status}`}
          id={`todo-item-${item.id}`}
        >
          <div className="name">{item.name}</div>
          <div className="buttons">
            {item.status === "todo" && <PhocusButton action="start" />}
            {item.status === "started" && (
              <PhocusButton action="finish" className="finish" />
            )}
            <PhocusButton action="delete" className="warn">
              &times;
            </PhocusButton>
          </div>
        </PhocusContext>
      );
    }
  }
);
