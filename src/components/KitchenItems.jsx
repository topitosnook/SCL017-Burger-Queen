import React, { useEffect, useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import db from '../firebase';

export default function KitchenItems({ pedido }) {
  // const [doneButton, setDoneButton] = useState('waitingOrderButton');
  const changeTerminado = (e) => {
    const orderRef = doc(db, 'orders', pedido.id);
    setDoc(orderRef, {
      // OrderId: pedido.OrderId,
      Mesero: pedido.Mesero,
      Mesa: pedido.Mesa,
      Total: pedido.Total,
      Time: pedido.Time,
      Order: pedido.Order,
      Terminado: 'Pedido Listo',
    });
    // setDoneButton('doneOrderButton');
  };
  let doneButton = 'waitingOrderButton';
  if (pedido.Terminado === 'Pedido Listo') {
    doneButton = 'doneOrderButton';
  }
  return (
    <>
      <tr key={pedido.id}>
        {/* <td>{pedido.OrderId}</td> */}
        <td>{pedido.Mesa}</td>
        <td>{pedido.Mesero}</td>
        <td>${pedido.Total}</td>
        <td>
          <ul>
            {pedido.Order.map((item) => {
              return (
                <li key={item.id}>
                  {item.quantity} x {item.title}
                </li>
              );
            })}
          </ul>
        </td>
        <td id="buttonPlace">
          <button
            className={doneButton}
            onClick={changeTerminado}
            type="button"
            activeClassName="active1"
          >
            {pedido.Terminado}
          </button>
        </td>
      </tr>
    </>
  );
}
