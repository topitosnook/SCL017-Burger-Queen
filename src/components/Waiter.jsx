import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default function Waiter(props) {
  const { waiter } = props;
  return (
    <>
      <Link to={{ pathname: '/SCL017-Spooky-Burger/tables', state: waiter }}>
        <button className="waiterButton" type="button">
          { waiter }
        </button>
      </Link>
    </>
  );
}
// Waiter.propTypes = { waiter: PropTypes.string.isRequired };
