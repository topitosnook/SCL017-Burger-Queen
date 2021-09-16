import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <section>
      <h1> Eleccion del Meser@</h1>
      <Link to="/tables">
        <button type="button">Name Server</button>
      </Link>
    </section>
  );
}
