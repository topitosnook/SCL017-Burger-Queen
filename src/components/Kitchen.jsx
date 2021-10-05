import React, { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import db from '../firebase';
import MetaDecorator from './MetaDecorator';
import { NavKitchen } from './Nav';

export default function Kitchen() {
  const [pedidos, setPedidos] = useState([]);
  const getData = async () => {
    const docs = [];
    const orderRef = collection(db, 'orders');
    const orderQuery = query(orderRef, orderBy('Time', 'desc'));
    const querySnapshot = await getDocs(orderQuery);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setPedidos(docs);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <MetaDecorator title="Pedidos - Spooky Burger" />
      <NavKitchen />
      <main>
        <h1>Pedidos</h1>
        <table id="tableOrders">
          <thead>
            <th>N° Orden</th>
            <th>Mesa</th>
            <th>Mesero</th>
            <th>Total</th>
            <th>Pedido</th>
            <th>Estado</th>
          </thead>
          {pedidos.map((pedido) => {
            return (
              <tr key={pedido.id}>
                <td>{pedido.OrderId}</td>
                <td>{pedido.Mesa}</td>
                <td>{pedido.Mesero}</td>
                <td>${pedido.Total}</td>
                <td>
                  <ul>
                    {pedido.Order.map((item) => {
                      return <li key={item.id}>{item.quantity} x {item.title}</li>;
                    })}
                  </ul>
                </td>
                <td>{pedido.Terminado}</td>
              </tr>
            );
          })}
        </table>
      </main>
    </>
  );
}
