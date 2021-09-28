import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Waiter from '../components/Waiter';

test('renders waiter component', () => {
  const nameWaiter = 'waiter #1';
  const component = render(
    <BrowserRouter>
      <Waiter waiter={nameWaiter} />
    </BrowserRouter>,
  );
  // console.log(component);
  expect(component.container).toHaveTextContent(nameWaiter);
});
