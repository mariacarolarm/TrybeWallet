// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

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
          ...action.payload, // Spread the array elements directly
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
    default:
      return state;
  }
};

export default wallet;
