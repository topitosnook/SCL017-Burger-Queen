import React, { useState } from 'react';
import items from './data';
import Categories from './Categories';
import MenuItems from './MenuItems';
import Order from './Order';
import { NavMenu } from './Nav';

const allCategories = ['all', ...new Set(items.products.map((item) => item.category2))];
export default function Menu() {
  const { products } = items;
  const [menuItems, setMenuItems] = useState(products);
  const [activeCategory, setActiveCategory] = useState('');
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setMenuItems(products);
      return;
    }
    const newItems = products.filter((item) => item.category2 === category);
    setMenuItems(newItems);
  };
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x));
    }
  };
  return (
    <>
      <NavMenu />
      <main>
        <section>
          {' '}
          <h1>Menu</h1>
        </section>
        <section className="menuContainer">
          <section id="menu">
            <Categories
              categories={categories}
              filterItems={filterItems}
              activeCategory={activeCategory}
            />
            <MenuItems onAdd={onAdd} items={menuItems} fallback="Loading..." />
          </section>
          <Order onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
        </section>
      </main>
    </>
  );
}
