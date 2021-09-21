import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { NavWaiter } from './Nav';

export default function Waiters() {
  return (
    <>
      <NavWaiter />
      <section>
        <h1> Eleccion del Meser@</h1>
        <Link to={{ pathname: '/SCL017-Spooky-Burger/tables', state: 'Mesero 1' }}>
          <button className="waiterButton" type="button">
            Waiter 1
          </button>
        </Link>
        <Link to={{ pathname: '/SCL017-Spooky-Burger/tables', state: 'Mesero 2' }}>
          <button className="waiterButton" type="button">
            Waiter 2
          </button>
        </Link>
        <Link to={{ pathname: '/SCL017-Spooky-Burger/tables', state: 'Mesero 3' }}>
          <button className="waiterButton" type="button">
            Waiter 3
          </button>
        </Link>
        <Link to={{ pathname: '/SCL017-Spooky-Burger/tables', state: 'Mesero 4' }}>
          <button className="waiterButton" type="button">
            Waiter 4
          </button>
        </Link>
        {/* <button type="button">Confirmar</button> */}
      </section>
    </>
  );
}
