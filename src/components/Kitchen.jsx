import React from 'react';
import MetaDecorator from './MetaDecorator';
import { NavKitchen, NavOrders } from './Nav';

export default function Kitchen(props) {
  return (
    <>
      <MetaDecorator title="Kitchen - Spooky Burger" />
      <NavKitchen />
    </>
  );
}
