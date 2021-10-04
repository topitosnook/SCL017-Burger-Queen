import React from 'react';
import MetaDecorator from './MetaDecorator';
import { NavWaiter } from './Nav';
import Waiter from './Waiter';

export default function Waiters() {
  return (
    <>
      <MetaDecorator title="Ingreso Personal - Spooky Burger" />
      <NavWaiter />
      <main>
        <h1> Eleccion del Meseros</h1>
        <Waiter waiter="Mesero 1" />
        <Waiter waiter="Mesero 2" />
        <Waiter waiter="Mesero 3" />
        <Waiter waiter="Mesero 4" />
      </main>
    </>
  );
}
