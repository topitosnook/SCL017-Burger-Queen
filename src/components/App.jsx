import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Profile from './Profile';
import Kitchen from './Kitchen';
import Tables from './Tables';
import Menu from './Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profiles" component={Profile} />
          <Route path="/kitchen" component={Kitchen} />
          <Route path="/tables" component={Tables} />
          <Route path="/menu" component={Menu} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
