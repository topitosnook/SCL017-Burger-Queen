import React, { useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
// import nextId from 'react-id-generator';
import db from '../firebase';

export default function Order(props) {
  const location = useLocation();
  const { cartItems, onAdd, onRemove, removeAllItems } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const waiter = location.state[0];
  const table = location.state[1];
  const getDate = () => {
    const hoy = new Date();
    const fecha = `${hoy.getDate()} - ${(hoy.getMonth() + 1)} - ${hoy.getFullYear()}`;
    const hora = `${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`;
    const fechaYHora = `${fecha} ${hora}`;
    return fechaYHora;
  };
  const totalPrice = itemsPrice;
  const toFirebase = async () => {
    const docRef = await addDoc(collection(db, 'orders'), {
      // OrderId: nextId('order-'),
      Mesero: waiter,
      Mesa: table,
      Total: totalPrice,
      Time: getDate(),
      Order: cartItems,
      Terminado: 'Pedido esperando',
    });
    removeAllItems();
  };
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <>
      <aside id="order">
        <div>
          <div id="firstHalfOrder">
            <h2>Pedido</h2>
            <div id="tableInfo">
              <h3>{waiter}</h3>
              <h3>{table}</h3>
            </div>
            <hr />
          </div>
          <div>{cartItems.length === 0 && <h3 id="emptyOrder">Orden vacía</h3>}</div>
          {cartItems.map((item) => (
            <div key={item.id} className="itemsInOrder">
              <p>{item.title}</p>
              <div>
                <button type="button" onClick={() => onAdd(item)} className="changeNumberItem" id="add">
                  +
                </button>
                <button
                  type="button"
                  onClick={() => onRemove(item)}
                  className="changeNumberItem"
                  id="deduct"
                >
                  -
                </button>
              </div>
              <p>
                {item.quantity} x ${item.price}
              </p>
            </div>
          ))}
          {cartItems.length !== 0 && (
            <>
              <hr />
              <div>
                <h3>Total de la orden:</h3>
                <p>${itemsPrice}</p>
              </div>
            </>
          )}
          <div>
            <Link to="/SCL017-Spooky-Burger/kitchen">
              <button type="button" onClick={toFirebase} className="interactionWithOrder" id="sendOrder">Enviar Pedido</button>
            </Link>
            <button type="button" onClick={removeAllItems} className="interactionWithOrder" id="eraseOrder">Borrar Pedido</button>
          </div>
        </div>
      </aside>
    </>
  );
}
