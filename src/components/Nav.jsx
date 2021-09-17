import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul>
        <Link to="/">
          <li>Inicio</li>
        </Link>
      </ul>
    </nav>
  );
}
