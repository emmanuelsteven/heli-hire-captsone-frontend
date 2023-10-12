import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'; 
import store from '../../store'; 
import { MemoryRouter as Router } from 'react-router-dom';
import HelicopterList from '../Helicopter';

test('HelicopterList snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
        <Router>
      <HelicopterList />
      </Router>
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
