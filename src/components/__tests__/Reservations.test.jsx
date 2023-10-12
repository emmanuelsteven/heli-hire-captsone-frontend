import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Reservations from '../reservations';
import "@testing-library/jest-dom";
import store from '../../store';

test('Reservations component snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Reservations />
        </MemoryRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });