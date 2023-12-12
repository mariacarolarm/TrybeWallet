// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ExpensesType } from '../../services/types';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'NEW_EXPENSES':
      return {
        ...state,
        expenses: [
          ...state.expenses,
          ...action.payload,
        ],
      };
    case 'CHOSEN_CURRENCIES':
      return {
        ...state,
        currencies: action.payload,
      };
    case 'SAVED_EXPENSES':
      return {
        ...state,
        total: action.payload,
      };
    case 'NEW_REQUEST':
      return {
        ...state,
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses
          .filter((expense: ExpensesType) => expense.id !== action.payload),
      };
    default:
      return state;
  }
};

export default wallet;
