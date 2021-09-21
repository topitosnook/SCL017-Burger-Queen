import React from 'react';
import { Link } from 'react-router-dom';
import { NavLanding } from './Nav';

function Home() {
  return (
    <>
      <NavLanding />
      <h1>This is Home</h1>
      <section>
        <Link to="/SCL017-Spooky-Burger/kitchen">
          <button className="electionButton" type="button"> Cocina </button>
        </Link>
        <Link to="/SCL017-Spooky-Burger/waiters">
          <button className="electionButton" type="button"> Meserx </button>
        </Link>
      </section>
    </>
  );
}
export default Home;
