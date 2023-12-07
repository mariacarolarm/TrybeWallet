// Esse reducer será responsável por tratar as informações da pessoa usuária

type ActionType = {
  type: string,
  payload: string,
};

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case 'INPUT_EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
}

export default user;
