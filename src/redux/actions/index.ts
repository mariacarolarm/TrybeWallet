import { ThunkType } from '../../services/types';

export const savedEmail = (email: string) => ({
  type: 'INPUT_EMAIL',
  payload: email,
});

export const newExpenses = (expenses: any) => ({
  type: 'NEW_EXPENSES',
  payload: expenses,
});

export const chosenCurrencies = (currencies: any) => ({
  type: 'CHOSEN_CURRENCIES',
  payload: currencies,
});

export const savedExpenses = (total: number) => ({
  type: 'SAVED_EXPENSES',
  payload: total,
});

export const newRequest = () => ({
  type: 'NEW_REQUEST',
});

export const currenciesApi = () => async (dispatch: ThunkType) => {
  try {
    dispatch(newRequest());
    const response = await fetch(
      'https://economia.awesomeapi.com.br/json/all',
    );
    const data = await response.json();
    const keys = Object.keys(data);
    const filter = keys.filter((key) => key !== 'USDT');
    dispatch(chosenCurrencies(filter));
  } catch (error) {
    console.log(error);
  }
};
