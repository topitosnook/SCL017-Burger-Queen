import React, { useState } from 'react';
import Categories from './Categories';
import MenuItems from './MenuItems';
import Order from './Order';
import { NavMenu } from './Nav';
import MetaDecorator from './MetaDecorator';

// const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
export default function Menu({ categories, filterItems, activeCategory, menuItems, cartItems, setCartItems }) {
  const removeAllItems = () => {
    setCartItems([]);
  };
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
      <MetaDecorator title="Menú - Spooky Burger" />
      <NavMenu />
      <main>
        <section>
          <h1>Menu</h1>
        </section>
        <section className="menuContainer">
          <section id="menu">
            <section>
              <Categories
                categories={categories}
                filterItems={filterItems}
                activeCategory={activeCategory}
              />
            </section>
            <section id="menuTable">
              <MenuItems onAdd={onAdd} items={menuItems} />
            </section>
          </section>
          <Order onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} removeAllItems={removeAllItems} />
        </section>
      </main>
    </>
  );
}
