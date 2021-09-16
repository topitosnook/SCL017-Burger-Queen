import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Profile from './Profile';
import Kitchen from './Kitchen';
import Tables from './Tables';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profiles" component={Profile} />
          <Route path="/kitchen" component={Kitchen} />
          <Route path="/tables" component={Tables} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
