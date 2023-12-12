import { screen, act } from '@testing-library/react';
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

  it('calcula o total corretamente sem despesas', () => {
    renderWithRouterAndRedux(<Header />);
    const totalElement = screen.getByTestId('total-field');
    expect(totalElement).toHaveTextContent('0.00');
  });

  it('calcula total corretamente com diferentes moedas', () => {
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
    expect(totalElement).toHaveTextContent('380.00');
  });

  it('testando reducers', async () => {
    const { store } = await renderWithRouterAndRedux(<Header />, { initialEntries: ['/carteira'] });
    const initialState = {
      currencies: ['USD', 'EUR'],
      expenses: [
        { id: 1, value: 10, currency: 'USD' },
      ],
      editor: false,
      idToEdit: 0,
    };

    const newExpensesAction = {
      type: 'NEW_EXPENSES',
      payload: [
        { id: 2, value: 20, currency: 'EUR' },
        { id: 3, value: 15, currency: 'USD' },
      ],
    };

    act(() => {
      store.dispatch({ type: 'INITIAL_STATE', payload: initialState });
    });

    act(() => {
      store.dispatch(newExpensesAction);
    });

    const updatedState = store.getState();

    expect(updatedState.wallet.expenses).toHaveLength(2);
    expect(updatedState.wallet.expenses[1]).toEqual({ id: 3, value: 15, currency: 'USD' });
  });
});
