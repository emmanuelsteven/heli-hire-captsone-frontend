import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Reservations from '../components/reservations';
import { getReservations, fetchHelicopters } from '../features/reservations/reservationSlice';

// Mock Redux store
const mockStore = configureStore([]);

// Mock your initial Redux state as needed
const initialState = {
  reservations: {
    reservation: [
      // Add sample reservation data as needed for your tests
      {
        id: 1,
        helicopter_id: 1,
        user_id: 1,
        date: '2023-10-10',
        city: 'lagos',
        status: 'confirmed',
      },
    ],
  },
  helicopters: {
    helicopter: [],
  },
};

// Mock Redux actions
jest.mock('../features/reservations/reservationSlice', () => ({
  getReservations: jest.fn(),
  fetchHelicopters: jest.fn(),
}));

describe('Reservations Component', () => {
  let store;

  beforeEach(() => {
    // Create a mock store with initial state
    store = mockStore(initialState);

    // Clear any previous mock function calls
    getReservations.mockClear();
    fetchHelicopters.mockClear();
  });

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <Router>
          <Reservations />
        </Router>
      </Provider>
    );
    
    // You can add assertions here to check if specific elements are rendered
    // Example: screen.getByText('Your next appointment is on');
  });

  it('dispatches getReservations and fetchHelicopters actions on mount', () => {
    render(
      <Provider store={store}>
        <Router>
          <Reservations />
        </Router>
      </Provider>
    );

    // Check if getReservations and fetchHelicopters were called
    expect(getReservations).toHaveBeenCalledTimes(1);
    expect(fetchHelicopters).toHaveBeenCalledTimes(1);
  });

  // You can write more specific tests for various components and behaviors in your Reservations component
});
