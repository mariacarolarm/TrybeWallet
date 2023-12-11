import { screen } from '@testing-library/react';
import Header from '../components/Header';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Login page tests', () => {
  it('renderiza campo de email e o total de despesas', () => {
    renderWithRouterAndRedux(<Header />);
    const emailElement = screen.getByTestId('email-field');
    const currencyElement = screen.getByTestId('header-currency-field');
    expect(emailElement).toBeInTheDocument();
    expect(currencyElement).toBeInTheDocument();
  });
  it('calculates total correctly with no expenses', () => {
    renderWithRouterAndRedux(<Header />);

    const totalElement = screen.getByTestId('total-field');
    expect(totalElement).toHaveTextContent('0.00'); // No expenses provided, total should be 0
  });

  it('calculates total correctly with expenses in different currencies', () => {
    const mockExpenses = [
      {
        id: 1,
        value: 10,
        currency: 'USD',
        exchangeRates: { USD: { ask: 5 } },
      },
      {
        id: 2,
        value: 20,
        currency: 'EUR',
        exchangeRates: { EUR: { ask: 6 } },
      },
      {
        id: 3,
        value: 30,
        currency: 'GBP',
        exchangeRates: { GBP: { ask: 7 } },
      },
    ];

    renderWithRouterAndRedux(<Header />, {
      initialState: {
        wallet: {
          expenses: mockExpenses,
        },
      },
    });

    const totalElement = screen.getByTestId('total-field');
    expect(totalElement).toHaveTextContent('380.00'); // (10 * 5) + (20 * 6) + (30 * 7) = 50 + 120 + 210 = 330
  });
});
