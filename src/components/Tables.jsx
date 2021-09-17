import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export default function Tables() {
  const location = useLocation();
  return (
    <section>
      <h1>Eleccion de las mesas</h1>
      <section>
        <Link to={{ pathname: '/menu', state: [location.state, 'Mesa 1'] }}>
          <button type="button"> Mesa 1</button>
        </Link>
        <Link to={{ pathname: '/menu', state: 'Mesa 1' }}>
          <button type="button"> Mesa 2</button>
        </Link>
      </section>
      <section>
        <h2>Pedido</h2>
        <h3>{location.state}</h3>
      </section>
    </section>
  );
}
