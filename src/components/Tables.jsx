import React from 'react';
import { useLocation } from 'react-router';
import MetaDecorator from './MetaDecorator';
// import { Link } from 'react-router-dom';
import { NavTables } from './Nav';
import Table from './Table';

export default function Tables() {
  const location = useLocation();
  return (
    <>
      <MetaDecorator title="Mesas - Spooky Burger" />
      <NavTables />
      <section className="container">
        <h1>Eleccion de las mesas</h1>
        <section className="tablesSection">
          <Table waiter={location.state} table="Mesa 1" />
          <Table waiter={location.state} table="Mesa 2" />
          <Table waiter={location.state} table="Mesa 3" />
          <Table waiter={location.state} table="Para llevar" />
        </section>
        <section className="orderSection">
          <h2>Pedido</h2>
          <h3>{location.state}</h3>
        </section>
      </section>
    </>
  );
}
