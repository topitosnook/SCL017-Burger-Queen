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
        <h1> Eleccion del Meseres</h1>
        <Waiter waiter="Mesere 1" />
        <Waiter waiter="Mesere 2" />
        <Waiter waiter="Mesere 3" />
        <Waiter waiter="Mesere 4" />
      </main>
    </>
  );
}
