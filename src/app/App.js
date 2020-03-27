import React, { Component } from "react";
import { TodoListView } from "../todo-list-view/TodoListView";
import { WithCommandPalette } from "react-phocus";
import 'react-phocus/dist/react-phocus.css';

export class App extends Component {
  render() {
    return (
      <WithCommandPalette>
      <div>
        <h1>React-Phocus: A Todo List Example</h1>
        <TodoListView />
        <div className="descriptive-text">
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

          <p>Things to note:</p>
          <ul>
            <li>Try using the arrow keys, or j and k, to move between list items.</li>
            <li><strong>Press Control-Shift-? to see a palette of actions you can take.</strong> Focus on different items, and see how the palette changes.</li>
            <li><span tabIndex="0" data-phocus-id="todo-item-2" style={{color: "blue"}}>This text</span> has the same
              phocus-id as one of the todo items, but phocus never mistakenly focuses on it instead.</li>
            <li>In the source, none of these buttons have text; empty buttons are given default labels by Phocus.</li>
            <li>Buttons are given aria labels and tooltips which describe their behavior, and any relevant keyboard
              shortcut. A screenreader will read the &times; button as "Delete (backspace)".</li>
          </ul>
          <p>
            Read more about how to use react-phocus in its README on{" "}
            <a href="https://github.com/diiq/react-phocus">Github</a>. View the source
            for this example{" "}
            <a href="https://github.com/diiq/react-phocus-example">here</a>.
          </p>
        </div>
      </div>
      </WithCommandPalette>
    );
  }
}
