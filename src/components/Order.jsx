import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function Order(props) {
  const location = useLocation();
  const { cartItems, onAdd, onRemove, removeAllItems } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
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
              <h3>{location.state[0]}</h3>
              <h3>{location.state[1]}</h3>
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
            <button type="button">Enviar Pedido</button>
            <button type="button" onClick={removeAllItems}>Borrar Pedido</button>
          </div>

        </div>
      </aside>
    </>
  );
}
