import React, { useState } from 'react';
import items from './data';
import Categories from './Categories';
import Menu1 from './Menu1';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
export default function Menu2() {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState('');
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div>
          <h1>Menu List</h1>
        </div>
        <Categories
          categories={categories}
          filterItems={filterItems}
          activeCategory={activeCategory}
        />
        <Menu1 items={menuItems} fallback="Loading..." />
      </section>
    </main>
  );
}
