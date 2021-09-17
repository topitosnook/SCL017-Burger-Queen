import React from 'react';
import { useLocation } from 'react-router';

export default function Menu() {
  const location = useLocation();
  console.log(location);
  return (
    <section>
      Menu
      <section>
        <h2>Pedido</h2>
        <h3>{location.state[0]}</h3>
        <h3>{location.state[1]}</h3>
      </section>
    </section>
  );
}
