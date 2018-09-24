import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { startPhocus } from "react-phocus";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
startPhocus(document.getElementById('root'));