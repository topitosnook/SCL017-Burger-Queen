import React from 'react';
import { Link } from 'react-router-dom';
import MetaDecorator from './MetaDecorator';
import { NavLanding } from './Nav';

function Home() {
  return (
    <>
      <MetaDecorator title="Home - Spooky Burger" />
      <NavLanding />
      <main>
        <h1 lang="en" id="landingTitle">Spooky Burger</h1>
        <Link to="/SCL017-Spooky-Burger/kitchen">
          <button className="electionButton" type="button">
            Cocina
          </button>
        </Link>
        <Link to="/SCL017-Spooky-Burger/waiters">
          <button className="electionButton" type="button">
            Meseres
          </button>
        </Link>
      </main>
    </>
  );
}
export default Home;
