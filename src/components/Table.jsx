import React from 'react';
import { Link } from 'react-router-dom';

export default function Table(props) {
  const { waiter, table } = props;
  return (
    <>
      <Link to={{ pathname: '/SCL017-Spooky-Burger/menu', state: [waiter, table] }}>
        <button className="tableButton" type="button">
          {table}
        </button>
      </Link>
    </>
  );
}
