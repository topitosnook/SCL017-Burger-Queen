import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function Waiters() {
  return (
    <section>
      <h1> Eleccion del Meser@</h1>
      <Link to={{ pathname: '/tables', state: 'Mesero 1' }}>
        <button type="button">Waiter 1</button>
      </Link>
      <Link to={{ pathname: '/tables', state: 'Mesero 2' }}>
        <button type="button">Waiter 2</button>
      </Link>
      {/* <button type="button">Confirmar</button> */}
    </section>
  );
}
