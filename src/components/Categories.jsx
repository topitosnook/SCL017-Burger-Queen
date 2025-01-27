import React from 'react';

export default function Categories({
  categories,
  filterItems,
  activeCategory,
}) {
  return (
    <div className="buttonContainer">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={`${
              activeCategory === category ? 'filter-btn active' : 'filter-btn'
            }`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
