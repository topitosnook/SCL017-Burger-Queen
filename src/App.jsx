import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Waiters from './components/Waiters';
import Kitchen from './components/Kitchen';
import Tables from './components/Tables';
import Menu from './components/Menu';
import Menu2 from './components/Menu2';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/SCL017-Spooky-Burger/" exact component={Home} />
          <Route path="/SCL017-Spooky-Burger/waiters" component={Waiters} />
          <Route path="/SCL017-Spooky-Burger/kitchen" component={Kitchen} />
          <Route path="/SCL017-Spooky-Burger/tables" component={Tables} />
          <Route path="/SCL017-Spooky-Burger/menu" component={Menu2} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
