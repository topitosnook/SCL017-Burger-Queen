import React from 'react';
// import { Link } from 'react-router-dom';

function NavWaiter() {
  return (
    <nav className="navbar">
      <h3>Logo</h3>
      <section>
        <a href="/" className="navbarLinks">
          Inicio
        </a>
      </section>
    </nav>
  );
}

function NavTables() {
  return (
    <nav className="navbar">
      <h3>Logo</h3>
      <section>
        <a href="/" className="navbarLinks">
          Inicio
        </a>
        <a href="/waiters" className="navbarLinks">
          Waiter
        </a>
      </section>
    </nav>
  );
}

function NavMenu() {
  return (
    <nav className="navbar">
      <h3>Logo</h3>
      <section>
        <a href="/" className="navbarLinks">
          Inicio
        </a>
        <a href="/waiters" className="navbarLinks">
          Waiter
        </a>
        <a href="/tables" className="navbarLinks">
          Mesas
        </a>
      </section>
    </nav>
  );
}

export { NavWaiter, NavTables, NavMenu };
