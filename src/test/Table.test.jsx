import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Table from '../components/Table';

test('renders table component', () => {
  const nameTable = 'table #1';
  const waiter = 'waiter 1';
  const component = render(
    <BrowserRouter>
      <Table waiter={waiter} table={nameTable} />
    </BrowserRouter>,
  );
  // console.log(component);
  expect(component.container).toHaveTextContent(nameTable);
});
