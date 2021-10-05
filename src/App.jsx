import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/Home';
import Waiters from './components/Waiters';
import Kitchen from './components/Kitchen';
import Tables from './components/Tables';
import Menu from './components/Menu';
import './styles/App.css';
import items from './components/data';

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
const allCategories = [
  'Todas',
  ...new Set(items.products.map((item) => item.category2)),
];
function App() {
  const { products } = items;
  const [menuItems, setMenuItems] = useState(products);
  const [activeCategory, setActiveCategory] = useState('');
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === 'Todas') {
      setMenuItems(products);
      return;
    }
    const newItems = products.filter((item) => item.category2 === category);
    setMenuItems(newItems);
  };
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);
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

          <Route path="/SCL017-Spooky-Burger/tables">
            <Tables />
          </Route>
          <Route path="/SCL017-Spooky-Burger/menu">
            <Menu
              categories={categories}
              filterItems={filterItems}
              activeCategory={activeCategory}
              menuItems={menuItems}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          </Route>
          <Route path="/SCL017-Spooky-Burger/kitchen">
            <Kitchen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
