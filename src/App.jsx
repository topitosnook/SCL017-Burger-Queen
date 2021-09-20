import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Waiters from './components/Waiters';
import Kitchen from './components/Kitchen';
import Tables from './components/Tables';
import Menu from './components/Menu';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/waiters" component={Waiters} />
          <Route path="/kitchen" component={Kitchen} />
          <Route path="/tables" component={Tables} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
