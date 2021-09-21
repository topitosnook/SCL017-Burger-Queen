import React from 'react';
import { useLocation } from 'react-router';
import carte from './FoodMenu.json';
import { NavMenu } from './Nav';

console.log(carte.breakfast.food.name);
export default function Menu() {
  const location = useLocation();
  return (
    <>
      <NavMenu />
      <h1>Menú</h1>
      <section className="menuContainer">
        <section id="menu">
          <section id="breakfast">
            <h2> Menú Desayuno</h2>
            <h3> Sandwich </h3>
            <p>
              {carte.breakfast.food[0].name} ${carte.breakfast.food[0].price}
              <br />
              {carte.breakfast.food[1].name} ${carte.breakfast.food[1].price}
            </p>
            <h3> Para tomar </h3>
            <p>
              {carte.breakfast.drinks[0].name} ${carte.breakfast.drinks[0].price}
              <br />
              {carte.breakfast.drinks[1].name} ${carte.breakfast.drinks[1].price}
              <br />
              {carte.breakfast.drinks[2].name} ${carte.breakfast.drinks[2].price}
            </p>
          </section>
          <section id="not-breakfast">
            <h2>Menú Día</h2>
            <h3> Hamburguesas </h3>
            <h3> Para tomar </h3>
            <p>
              Agua:
              <br />
              {carte.afternoon.drinks.water[0].size} ${carte.afternoon.drinks.water[0].price}
              <br />
              {carte.afternoon.drinks.water[1].size} ${carte.afternoon.drinks.water[1].price}
              <br />
              Bebida:
              <br />
              {carte.afternoon.drinks.soda[0].size} ${carte.afternoon.drinks.soda[0].price}
              <br />
              {carte.afternoon.drinks.soda[1].size} ${carte.afternoon.drinks.soda[1].price}
            </p>
          </section>
        </section>
        <section id="order">
          <h2>Pedido</h2>
          <h3>{location.state[0]}</h3>
          <h3>{location.state[1]}</h3>
        </section>
      </section>
    </>
  );
}
