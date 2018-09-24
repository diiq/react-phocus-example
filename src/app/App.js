import React, { Component } from "react";
import { TodoListView } from "../todo-list-view/TodoListView";

export class App extends Component {
  render() {
    return (
      <div>
        <h1>React-Phocus: A Todo List Example</h1>
        <TodoListView />
        <div class="descriptive-text">
          <p>
            Phocus manages actions, hotkeys, and focus for poweruser-friendly,
            accessible webapps.
          </p>

          <p>
            This is an absolutely pared-down example of how to use Phocus.
            Phocus is not intended to be used stand-alone like this; it's
            intended to be paired with the frontend framework of your choice. A
            wrapper for react is coming soon.
          </p>

          <p>
            Things to note:
            <ul>
              <li>
                Todo items are focusable, and when focused, you can use
                contextual hotkeys to manipulate them; try 's' to start a task,
                or 'backspace' to delete one.
              </li>
              <li>
                Try using the arrow keys, or j and k, to move between list
                items, or Control+n to focus on the new item input
              </li>
              <li>
                In the source, none of these buttons have text; empty buttons
                are given default labels by Phocus.
              </li>
              <li>
                Buttons are given aria labels and tooltips which describe their
                behavior, and a relevant keyboard shortcut. A screenreader will
                read the &times; button as "Delete (backspace)".
              </li>
            </ul>
          </p>
          <p>
            Read more about how to use Phocus in its README on{" "}
            <a href="https://github.com/diiq/phocus">Github</a>. View the source
            for this example{" "}
            <a href="https://github.com/diiq/phocus-example">here</a>.
          </p>
        </div>
      </div>
    );
  }
}
