import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
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
