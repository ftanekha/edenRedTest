import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.scss';
import './bulma.css';
import * as serviceWorker from './serviceWorker';

const app = document.getElementById('app');

ReactDOM.render(<App />, app);

serviceWorker.unregister();
