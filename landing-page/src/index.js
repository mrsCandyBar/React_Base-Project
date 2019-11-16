import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Routing from './routing/index';
import * as serviceWorker from './assets/scripts/serviceWorker';

ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();