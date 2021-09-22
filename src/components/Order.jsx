import React from 'react';
import { useLocation } from 'react-router';

export default function Order() {
  const location = useLocation();
  return (
    <>
      <section id="order">
        <h2>Pedido</h2>
        <h3>{location.state[0]}</h3>
        <h3>{location.state[1]}</h3>
      </section>
    </>
  );
}
