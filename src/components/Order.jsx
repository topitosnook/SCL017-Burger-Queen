import React from 'react';
import { useLocation } from 'react-router';
// import PropTypes from 'prop-types';

export default function Order() {
  const location = useLocation();
  // const { name } = props;
  return (
    <>
      <section id="order">
        <h2>Pedido</h2>
        {/* <h3>{waiter}</h3> */}
        <h3>{location.state[0]}</h3>
        <h3>{location.state[1]}</h3>
        {/* <p>{name}</p> */}
      </section>
    </>
  );
}
// Order.propTypes = { name: PropTypes.string.isRequired };
