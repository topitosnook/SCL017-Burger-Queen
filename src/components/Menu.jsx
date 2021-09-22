import React, { useState } from 'react';
import carte from './FoodMenu.json';
import { NavMenu } from './Nav';
import Order from './Order';

export default function Menu() {
  const breakfastMenu = () => (
    <>
      <section id="breakfast">
        <h2> Menú Desayuno</h2>
        <h3> Sandwich </h3>
        <p>
          {carte.breakfast.food[0].name}
          {' '}
          $
          {carte.breakfast.food[0].price}
        </p>
        <p>
          {carte.breakfast.food[1].name}
          {' '}
          $
          {carte.breakfast.food[1].price}
        </p>
        <h3> Para tomar </h3>
        <p>
          {carte.breakfast.drinks[0].name}
          {' '}
          $
          {carte.breakfast.drinks[0].price}
        </p>
        <p>
          {carte.breakfast.drinks[1].name}
          {' '}
          $
          {carte.breakfast.drinks[1].price}
        </p>
        <p>
          {carte.breakfast.drinks[2].name}
          {' '}
          $
          {carte.breakfast.drinks[2].price}
        </p>
      </section>
    </>
  );
  const afternoonMenu = () => (
    <>
      <section id="not-breakfast">
        <h2>Menú Día</h2>
        <h3> Hamburguesas </h3>
        <h3> Para tomar </h3>
        <p>
          Agua:
          <br />
          {carte.afternoon.drinks.water[0].size}
          {' '}
          $
          {carte.afternoon.drinks.water[0].price}
          <br />
          {carte.afternoon.drinks.water[1].size}
          {' '}
          $
          {carte.afternoon.drinks.water[1].price}
          <br />
          Bebida:
          <br />
          {carte.afternoon.drinks.soda[0].size}
          {' '}
          $
          {carte.afternoon.drinks.soda[0].price}
          <br />
          {carte.afternoon.drinks.soda[1].size}
          {' '}
          $
          {carte.afternoon.drinks.soda[1].price}
        </p>
      </section>
    </>
  );
  const [myMenu, setMenu] = useState(breakfastMenu);
  const showBreakfast = () => {
    setMenu(breakfastMenu());
  };
  const showAfternoon = () => {
    setMenu(afternoonMenu());
  };

  return (
    <>
      <NavMenu />
      <h1>Menú</h1>
      <section className="menuContainer">
        <section id="menu">
          <nav className="navbar">
            <button type="button" className="menuLinks" onClick={showBreakfast}>
              Desayuno
            </button>
            <button type="button" className="menuLinks" onClick={showAfternoon}>
              Tarde
            </button>
          </nav>
          <section>{myMenu}</section>
        </section>
        <Order name="hola" />
      </section>
    </>
  );
}
