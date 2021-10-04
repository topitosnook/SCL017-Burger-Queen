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
    const q = query(orderRef, orderBy('Time', 'desc'));
    const querySnapshot = await getDocs(q);
    // console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    // return docs;
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
        <table>
          <thead>
            <th>Mesa</th>
            <th>Mesero</th>
            <th>Total</th>
            <th>Time</th>
          </thead>
          {pedidos.map((pedido) => {
            return (
              <tr key={pedido.id}>
                <td>{pedido.Mesa}</td>
                <td>{pedido.Mesero}</td>
                <td>${pedido.Total}</td>
                <td>{pedido.Time}</td>
              </tr>
            );
          })}
        </table>
      </main>
    </>
  );
}
