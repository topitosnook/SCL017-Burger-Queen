import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function NavLanding() {
  return (
    <nav className="navbar">
      <NavLink to="/" exact className="navbarLinks" activeClassName="active">
        Inicio
      </NavLink>
    </nav>
  );
}

function NavWaiter() {
  return (
    <nav className="navbar">
      <NavLink to="/" exact className="navbarLinks">
        Inicio
      </NavLink>
      <NavLink to="/waiters" className="navbarLinks" activeClassName="active">
        Waiter
      </NavLink>
    </nav>
  );
}

function NavTables() {
  return (
    <nav className="navbar">
      <NavLink to="/" exact className="navbarLinks">
        Inicio
      </NavLink>
      <NavLink to="/waiters" className="navbarLinks">
        Waiter
      </NavLink>
      <NavLink to="/tables" className="navbarLinks" activeClassName="active">
        Mesas
      </NavLink>
    </nav>
  );
}

function NavMenu() {
  return (
    <nav className="navbar">
      <NavLink to="/" exact className="navbarLinks">
        Inicio
      </NavLink>
      <NavLink to="/waiters" className="navbarLinks">
        Waiter
      </NavLink>
      <NavLink to="/tables" className="navbarLinks">
        Mesas
      </NavLink>
      <NavLink to="/menu" className="navbarLinks" activeClassName="active">
        Menú
      </NavLink>
    </nav>
  );
}

export {
  NavWaiter, NavTables, NavMenu, NavLanding,
};
