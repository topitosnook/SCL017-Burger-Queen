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
          <Route path="/SCL017-Spooky-Burger/" exact>
            <Home />
          </Route>
          <Route path="/SCL017-Spooky-Burger/waiters">
            <Waiters />
          </Route>
          <Route path="/SCL017-Spooky-Burger/kitchen">
            <Kitchen />
          </Route>
          <Route path="/SCL017-Spooky-Burger/tables">
            <Tables />
          </Route>
          <Route path="/SCL017-Spooky-Burger/menu">
            <Menu />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
