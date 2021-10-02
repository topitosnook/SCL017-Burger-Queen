import React, { useEffect } from 'react';
import MetaDecorator from './MetaDecorator';
import { NavKitchen } from './Nav';

export default function Kitchen({ cartItems }) {
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <>
      <MetaDecorator title="Pedidos - Spooky Burger" />
      <NavKitchen />
      {cartItems.map((item) => (
        <div key={item.id} className="itemsInOrder">
          <p>
            {item.title} {item.quantity} x ${item.price} Total de la orden ${itemsPrice}
          </p>
        </div>
      ))}
    </>
  );
}
