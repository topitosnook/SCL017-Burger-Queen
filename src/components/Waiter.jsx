import React from 'react';
import { Link } from 'react-router-dom';

export default function Waiter(props) {
  const { waiter } = props;
  return (
    <>
      <Link to={{ pathname: '/SCL017-Spooky-Burger/tables', state: waiter }}>
        <button lang="en" className="waiterButton" type="button">
          { waiter }
        </button>
      </Link>
    </>
  );
}
