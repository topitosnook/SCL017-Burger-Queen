import React from 'react';
import { NavLink } from 'react-router-dom';

function NavLanding() {
  return (
    <nav className="navbar">
      <NavLink to="/SCL017-Spooky-Burger/" exact className="navbarLinks" activeClassName="active">
        Inicio
      </NavLink>
    </nav>
  );
}

function NavWaiter() {
  return (
    <nav className="navbar">
      <NavLink to="/SCL017-Spooky-Burger/" exact className="navbarLinks">
        Inicio
      </NavLink>
      <NavLink to="/SCL017-Spooky-Burger/waiters" className="navbarLinks" activeClassName="active">
        Waiter
      </NavLink>
    </nav>
  );
}

function NavTables() {
  return (
    <nav className="navbar">
      <NavLink to="/SCL017-Spooky-Burger/" exact className="navbarLinks">
        Inicio
      </NavLink>
      <NavLink to="/SCL017-Spooky-Burger/waiters" className="navbarLinks">
        Waiter
      </NavLink>
      <NavLink to="/SCL017-Spooky-Burger/tables" className="navbarLinks" activeClassName="active">
        Mesas
      </NavLink>
    </nav>
  );
}

function NavMenu() {
  return (
    <nav className="navbar">
      <NavLink to="/SCL017-Spooky-Burger/" exact className="navbarLinks">
        Inicio
      </NavLink>
      <NavLink to="/SCL017-Spooky-Burger/waiters" className="navbarLinks">
        Waiter
      </NavLink>
      <NavLink to="/SCL017-Spooky-Burger/tables" className="navbarLinks">
        Mesas
      </NavLink>
      <NavLink to="/SCL017-Spooky-Burger/menu" className="navbarLinks" activeClassName="active">
        Menú
      </NavLink>
    </nav>
  );
}

function NavKitchen() {
  return (
    <nav className="navbar">
      <NavLink to="/SCL017-Spooky-Burger/" exact className="navbarLinks">
        Inicio
      </NavLink>
      <NavLink to="/SCL017-Spooky-Burger/orders" className="navbarLinks" activeClassName="active">
        Pedidos
      </NavLink>
    </nav>
  );
}
function NavOrders() {
  return (
    <nav className="navbar">
      <NavLink to="/SCL017-Spooky-Burger/" exact className="navbarLinks">
        Inicio
      </NavLink>
      <NavLink to="/SCL017-Spooky-Burger/waiters" className="navbarLinks">
        Waiter
      </NavLink>
      <NavLink to="/SCL017-Spooky-Burger/tables" className="navbarLinks">
        Mesas
      </NavLink>
      <NavLink to="/SCL017-Spooky-Burger/menu" className="navbarLinks">
        Menú
      </NavLink>
      <NavLink to="/SCL017-Spooky-Burger/orders" className="navbarLinks" activeClassName="active">
        Pedidos
      </NavLink>
    </nav>
  );
}
export {
  NavWaiter, NavTables, NavMenu, NavLanding, NavKitchen, NavOrders,
};
