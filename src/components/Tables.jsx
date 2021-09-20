import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { NavTables } from './Nav';

export default function Tables() {
  const location = useLocation();
  return (
    <>
      <NavTables />
      <section className="container">
        <h1>Eleccion de las mesas</h1>
        <section className="tablesSection">
          <Link to={{ pathname: '/menu', state: [location.state, 'Mesa 1'] }}>
            <button className="tableButton" type="button">
              {' '}
              Mesa 1
            </button>
          </Link>
          <Link to={{ pathname: '/menu', state: [location.state, 'Mesa 2'] }}>
            <button className="tableButton" type="button">
              {' '}
              Mesa 2
            </button>
          </Link>
          <Link to={{ pathname: '/menu', state: [location.state, 'Mesa 3'] }}>
            <button className="tableButton" type="button">
              {' '}
              Mesa 3
            </button>
          </Link>
          <Link to={{ pathname: '/menu', state: [location.state, 'Mesa 4'] }}>
            <button className="tableButton" type="button">
              {' '}
              Mesa 4
            </button>
          </Link>
          <Link to={{ pathname: '/menu', state: [location.state, 'Mesa 5'] }}>
            <button className="tableButton" type="button">
              {' '}
              Mesa 5
            </button>
          </Link>
          <Link
            to={{ pathname: '/menu', state: [location.state, 'Para llevar'] }}
          >
            <button className="tableButton" type="button">
              Para llevar
            </button>
          </Link>
        </section>
        <section className="orderSection">
          <h2>Pedido</h2>
          <h3>{location.state}</h3>
        </section>
      </section>
    </>
  );
}
