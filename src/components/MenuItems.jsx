import React from 'react';

export default function MenuItems({ items, onAdd }) {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, price } = item;
        return (
          <article key={id} className="menu-item">
            <div className="eachItem">
              <h4>
                {title} ${price}
              </h4>
              <div>
                <button onClick={() => onAdd(item)} type="button" className="addToOrder">Agregar</button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
