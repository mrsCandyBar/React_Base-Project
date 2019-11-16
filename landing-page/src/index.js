import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './pages/App';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import * as serviceWorker from './assets/scripts/serviceWorker';

const routing = (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about/:id" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();