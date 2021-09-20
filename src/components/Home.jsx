import React from 'react';
import { Link } from 'react-router-dom';
import { NavLanding } from './Nav';

function Home() {
  return (
    <>
      <NavLanding />
      <h1>This is Home</h1>
      <section>
        <Link to="/kitchen">
          <button className="electionButton" type="button"> Cocina </button>
        </Link>
        <Link to="/waiters">
          <button className="electionButton" type="button"> Meserx </button>
        </Link>
      </section>
    </>
  );
}
export default Home;
