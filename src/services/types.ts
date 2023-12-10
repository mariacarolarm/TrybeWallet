import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type UserType = {
  email: string,
  password: string,
};

export type WalletType = {
  currencies: string[],
  expenses: [],
  editor: boolean,
  idToEdit: number,
};

export type ExpensesType = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates: any,
};

export type GlobalType = {
  user: UserType,
  wallet: WalletType,
};

export type ThunkType = ThunkDispatch<GlobalType, null, AnyAction>;
