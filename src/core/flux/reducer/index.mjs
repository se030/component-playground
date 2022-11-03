import ACTION from '../constants/action.mjs';

const initialState = {
  message: 'nice to meet you',
};

export default (state = initialState, action) => {
  if (!action) return state;

  switch (action) {
    case ACTION.HI:
      return { ...state, message: 'hi' };

    case ACTION.BYE:
      return { ...state, message: 'bye' };

    default:
      return state;
  }
};
