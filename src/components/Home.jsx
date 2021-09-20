import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>This is Home</h1>
      <section>
        <Link to="/kitchen">
          <button type="button"> Cocina </button>
        </Link>
        <Link to="/profiles">
          <button type="button"> Meserx </button>
        </Link>
      </section>
    </>
  );
}
export default Home;
