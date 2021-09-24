import React from 'react';

export default function Menu1({ items, fallback }) {
  if (!items || items.length === 0) {
    return fallback;
  }
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, price } = item;
        return (
          <article key={id} className="menu-item">
            <div>
              <header>
                <h4>
                  {title} ${price}
                </h4>
              </header>
            </div>
          </article>
        );
      })}
    </div>
  );
}
