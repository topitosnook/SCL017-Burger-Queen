import React from 'react';
import MetaDecorator from './MetaDecorator';
// import { Link } from 'react-router-dom';
import { NavWaiter } from './Nav';
import Waiter from './Waiter';

export default function Waiters() {
  return (
    <>
      <MetaDecorator title="Ingreso Personal - Spooky Burger" />
      <NavWaiter />
      <section>
        <h1> Eleccion del Meser@</h1>
        <Waiter waiter="Waiter 1" />
        <Waiter waiter="Waiter 2" />
        <Waiter waiter="Waiter 3" />
        <Waiter waiter="Waiter 4" />
      </section>
    </>
  );
}
