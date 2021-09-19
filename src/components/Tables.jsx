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
        <Link to={{ pathname: '/menu', state: [location.state, 'Mesa 2'] }}>
          <button type="button"> Mesa 2</button>
        </Link>
        <Link to={{ pathname: '/menu', state: [location.state, 'Mesa 3'] }}>
          <button type="button"> Mesa 3</button>
        </Link>
        <Link to={{ pathname: '/menu', state: [location.state, 'Mesa 4'] }}>
          <button type="button"> Mesa 4</button>
        </Link>
        <Link to={{ pathname: '/menu', state: [location.state, 'Mesa 5'] }}>
          <button type="button"> Mesa 5</button>
        </Link>
        <Link to={{ pathname: '/menu', state: [location.state, 'Para llevar'] }}>
          <button type="button">Para llevar</button>
        </Link>
      </section>
      <section>
        <h2>Pedido</h2>
        <h3>{location.state}</h3>
      </section>
    </section>
  );
}
