import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase';
import MetaDecorator from './MetaDecorator';
import { NavKitchen } from './Nav';

export default function Kitchen() {
  const { pedidos, setPedidos } = useState();
  const getData = async () => {
    const docs = [];
    const querySnapshot = await getDocs(collection(db, 'orders'));
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    return docs;
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <MetaDecorator title="Pedidos - Spooky Burger" />
      <NavKitchen />
      {/* <main>
        <table>
          <thead>
            <th>Mesa</th>
            <th>Mesero</th>
            <th>Total</th>
          </thead>
          {pedidos.map((pedido) => {
            return (
              <tr key={pedido.id}>
                <td>{pedido.Mesa}</td>
                <td>{pedido.Mesero}</td>
                <td>{pedido.Total}</td>
              </tr>
            );
          })}
        </table>
      </main> */}
    </>
  );
}
